import glob from 'glob';
import path from 'path';
import fsExtra from 'fs-extra';
import * as url from 'url';

const { readFile, outputFile } = fsExtra;

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const generateStaticImport = () => {
  return `
import { createComponent } from '@lit-labs/react';
import * as React from 'react';`;
};

const generateImport = (iconDisplayName, iconDisplayFileName, iconElementName) => {
  return `
import { ${iconDisplayName} } from '@spectrum-web-components/icons-ui/src/elements/${iconDisplayFileName}.js';
import '@spectrum-web-components/icons-ui/icons/${iconElementName}.js';`;
};

const generateBody = (iconDisplayName, iconElementName) => {
  return `
export const Sp${iconDisplayName} = createComponent(React, '${iconElementName}', ${iconDisplayName}, {}, 'Sp${iconDisplayName}');`;
};

const generateIndex = (elementName, displayName) => {
  return `import dynamic from 'next/dynamic';

import { ${displayName} } from '@spectrum-web-components/icons-ui/src/elements/${displayName}.js';

export const Sp${displayName} = dynamic<${displayName} | { slot: string }>(
  () => import('./${displayName}').then((m) => m.Sp${displayName} as any),
  { ssr: false}
);
`;
};

const generate = async () => {
  glob(
    path.resolve(__dirname, '..', 'node_modules/@spectrum-web-components/icons-ui/icons/**.js'),
    async (error, icons) => {
      let rootIndexContent = '';
      for (let icon of icons) {
        let fileContent = generateStaticImport();
        const content = (await readFile(icon)).toString().split(';')[0];
        const displayName = content.substring(content.indexOf('{') + 1, content.indexOf(' '));
        const displayFileName = content.substring(content.lastIndexOf('/') + 1, content.length - 4);
        const elementName = path.parse(icon).name;

        fileContent = fileContent.concat(generateImport(displayName, displayFileName, elementName));
        fileContent = fileContent.concat(generateBody(displayName, elementName));
        await outputFile(
          path.resolve(__dirname, '..', `components/icons-ui/${displayName}/${displayName}.ts`),
          fileContent
        );

        fileContent = generateIndex(elementName, displayName);
        await outputFile(
          path.resolve(__dirname, '..', `components/icons-ui/${displayName}/index.ts`),
          fileContent
        );
        rootIndexContent = rootIndexContent.concat(`export * from './${displayName}';\n`);
      }
      await outputFile(
        path.resolve(__dirname, '..', `components/icons-ui/index.ts`),
        rootIndexContent
      );
    }
  );
};

(() => {
  generate();
})();
