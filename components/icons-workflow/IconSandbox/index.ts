import dynamic from 'next/dynamic';

import { IconSandbox } from '@spectrum-web-components/icons-workflow/src/elements/IconSandbox.js';

export const SpIconSandbox = dynamic<IconSandbox | { slot: string }>(
  () => import('./IconSandbox').then((m) => m.SpIconSandbox as any),
  { ssr: false }
);
