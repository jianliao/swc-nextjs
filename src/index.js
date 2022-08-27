import path from 'path';
import fsExtra from 'fs-extra';

const { readJson, outputFile } = fsExtra;

export function createElementMetadata(customElementsManifest, entrypoint) {
  const modules = getCustomElementModules(customElementsManifest);

  const elements = modules.flatMap((m) => {
    return m.declarations
      .filter(
        (d) => d.customElement && d.tagName && d.name.indexOf('Base') === -1
      )
      .map((d) => {
        return {
          name: d.name,
          tagName: d.tagName,
          description: d.description ?? '',
          import: `import { ${d.name} } from '${entrypoint}';`,
          slots: d.slots ?? [],
          cssProperties: d.cssProperties ?? [],
          events: getCustomElementEvents(d) ?? [],
          propeties: getPublicProperties(d),
        };
      });
  });

  const fileImports = customElementsManifest.modules
    .filter((m) => m.declarations.length === 0)
    .filter((m) => m.path.indexOf('sync/') === -1)
    .map((m) => `import '${entrypoint}/${m.path}';`);

  return { elements, fileImports };
}

function getPublicProperties(element) {
  return (
    element.members?.filter(
      (m) =>
        !m.readonly &&
        !m.static &&
        m.kind === 'field' &&
        m.privacy === undefined &&
        m.privacy !== 'private' &&
        m.privacy !== 'protected'
    ) ?? []
  ).map((p) => ({ name: p.name, type: p.type?.text }));
}

function getCustomElementModules(customElementsManifest) {
  return customElementsManifest.modules.filter(
    (m) =>
      m.declarations?.length &&
      m.declarations.find((d) => d.customElement === true)
  );
}

function getCustomElementEvents(element) {
  const memberEvents = element.members
    ? element.members
        .filter((event) => event.privacy === undefined) // public
        .filter(
          (prop) =>
            prop.type &&
            prop.type?.text &&
            prop.type?.text.includes('EventEmitter')
        )
        .map((event) => ({ name: event.name }))
    : [];
  const events = element.events ?? [];
  return Object.values(
    Object.values(
      [...memberEvents, ...events].reduce(
        (prev, next) => ({ ...prev, [next.name]: next }),
        {}
      )
    )
  );
}

export function generateSource(elements, fileImports, componentFileName) {
  const componentSource = `import * as React from 'react';
import { createComponent } from '@lit-labs/react';

${elements.reduce((pre, element) => pre + element.import + '\n', '')}
${fileImports.reduce((pre, im) => pre + im + '\n', '')}
${elements.reduce(
  (pre, element) =>
    pre +
    `export const Sp${element.name} = createComponent(React, '${
      element.tagName
    }', ${element.name}, { ${element.events.reduce(
      (pre, cur) =>
        pre +
        // Convert event name sp-on-press to spOnPress
        `${cur.name.replace(/-./g, (m) => m[1].toUpperCase())}: '${
          cur.name
        }', `,
      ''
    )}}, 'Sp${element.name}');\n`,
  ''
)}`;
  const indexSource = `import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

${elements.reduce((pre, element) => pre + element.import + '\n', '')}
const ssr = false;

${elements.reduce(
  (pre, element) =>
    pre +
    `export const Sp${element.name} = dynamic<${element.name} | { children?: ReactNode }>(() => import('./${componentFileName}').then(m => m.Sp${element.name} as any), { ssr });` +
    '\n',
  ''
)}`;
  return { componentSource, indexSource };
}

async function run(component) {
  try {
    const customElementsManifest = await readJson(
      path.resolve(`./node_modules/${component}/custom-elements.json`)
    );
    const { elements, fileImports } = createElementMetadata(
      customElementsManifest,
      component
    );
    const { indexSource, componentSource } = generateSource(
      elements,
      fileImports,
      elementNameToComponentName(component.split('/')[1])
    );

    const packageJson = `{
  "name": "@swc-nextjs/${component.split('/')[1]}",
  "version": "1.0.0",
  "description": "",
  "main": "dist/index.js",
  "scripts": {
    "build": "rm -fr dist && rollup -c",
    "clean": "rm -fr dist"
  },
  "keywords": [
    "React",
    "Spectrum Web Components"
  ],
  "author": "jian.liao@gmail.com",
  "license": "ISC",
  "devDependencies": {
    "@rollup/plugin-typescript": "^8.4.0",
    "@types/react": "^18.0.17",
    "next": "^12.2.5",
    "rollup": "^2.78.1",
    "rollup-plugin-delete": "^2.0.0",
    "rollup-plugin-dts": "^4.2.2",
    "typescript": "^4.8.2"
  },
  "dependencies": {
    "@lit-labs/react": "^1.0.8",
    "${component}": "latest"
  }
}
`;

    const rollupConfigJson = `import del from 'rollup-plugin-delete';
import dts from 'rollup-plugin-dts';
import typescript from '@rollup/plugin-typescript';

export default [
  {
    external: ['react', 'next/dynamic', '@lit-labs/react', /^@spectrum-web-components.*/],
    input: './index.ts',
    output: [
      { dir: 'dist', format: 'es', sourcemap: 'inline' }
    ],
    plugins: [
      typescript({ inlineSources: true, tsconfig: './tsconfig.json', declarationDir: \`\${__dirname}/dist/types\` }),
    ]
  },
  {
    input: \`\${__dirname}/dist/types/index.d.ts\`,
    output: [{ file: \`\${__dirname}/dist/index.d.ts\`, format: 'es' }],
    plugins: [
      dts(),
      del({ targets: 'dist/types', hook: 'buildEnd' })
    ]
  }
];`;

    const tsconfigJson = `{
  "extends": "../../tsconfig.base.json"
}`;

    await outputFile(
      `${component.replace(
        '@spectrum-web-components',
        './components'
      )}/tsconfig.json`,
      tsconfigJson
    );
    await outputFile(
      `${component.replace(
        '@spectrum-web-components',
        './components'
      )}/rollup.config.js`,
      rollupConfigJson
    );
    await outputFile(
      `${component.replace(
        '@spectrum-web-components',
        './components'
      )}/package.json`,
      packageJson
    );
    await outputFile(
      `${component.replace(
        '@spectrum-web-components',
        './components'
      )}/index.ts`,
      indexSource
    );
    await outputFile(
      `${component.replace(
        '@spectrum-web-components',
        './components'
      )}/${elementNameToComponentName(component.split('/')[1])}.ts`,
      componentSource
    );
  } catch (e) {
    console.error(
      `Code generation failed for component: ${component} due to \n${e.toSring}`
    );
  }
}

function elementNameToComponentName(elementName) {
  return elementName
    .split('-')
    .reduce((pre, cur) => pre + cur.charAt(0).toUpperCase() + cur.slice(1), '');
}

run('@spectrum-web-components/accordion');
run('@spectrum-web-components/action-bar');
run('@spectrum-web-components/action-button');
run('@spectrum-web-components/action-group');
run('@spectrum-web-components/action-menu');
run('@spectrum-web-components/asset');
run('@spectrum-web-components/avatar');
run('@spectrum-web-components/badge');
run('@spectrum-web-components/banner');
run('@spectrum-web-components/button');
run('@spectrum-web-components/button-group');
run('@spectrum-web-components/card');
run('@spectrum-web-components/checkbox');
// run('@spectrum-web-components/clear-button');
// run('@spectrum-web-components/close-button');
run('@spectrum-web-components/coachmark');
run('@spectrum-web-components/color-area');
run('@spectrum-web-components/color-handle');
run('@spectrum-web-components/color-loupe');
run('@spectrum-web-components/color-slider');
run('@spectrum-web-components/color-wheel');
run('@spectrum-web-components/dialog');
run('@spectrum-web-components/divider');
run('@spectrum-web-components/dropzone');
run('@spectrum-web-components/field-group');
run('@spectrum-web-components/field-label');
run('@spectrum-web-components/help-text');
// run('@spectrum-web-components/icon');
run('@spectrum-web-components/icons');
// run('@spectrum-web-components/icons-ui');
// run('@spectrum-web-components/icons-workflow');
// run('@spectrum-web-components/iconset');
run('@spectrum-web-components/illustrated-message');
run('@spectrum-web-components/link');
run('@spectrum-web-components/menu');
run('@spectrum-web-components/meter');
// run('@spectrum-web-components/modal');
run('@spectrum-web-components/number-field');
run('@spectrum-web-components/overlay');
run('@spectrum-web-components/picker');
run('@spectrum-web-components/popover');
run('@spectrum-web-components/progress-bar');
run('@spectrum-web-components/progress-circle');
run('@spectrum-web-components/quick-actions');
run('@spectrum-web-components/radio');
run('@spectrum-web-components/search');
// run('@spectrum-web-components/shared');
run('@spectrum-web-components/sidenav');
run('@spectrum-web-components/slider');
run('@spectrum-web-components/split-button');
run('@spectrum-web-components/split-view');
run('@spectrum-web-components/status-light');
// run('@spectrum-web-components/styles');
run('@spectrum-web-components/swatch');
run('@spectrum-web-components/switch');
run('@spectrum-web-components/tabs');
run('@spectrum-web-components/tags');
run('@spectrum-web-components/textfield');
run('@spectrum-web-components/theme');
run('@spectrum-web-components/thumbnail');
run('@spectrum-web-components/toast');
run('@spectrum-web-components/tooltip');
run('@spectrum-web-components/top-nav');
run('@spectrum-web-components/tray');
