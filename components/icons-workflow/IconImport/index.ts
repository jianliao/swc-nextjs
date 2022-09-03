import dynamic from 'next/dynamic';

import { IconImport } from '@spectrum-web-components/icons-workflow/src/elements/IconImport.js';

export const SpIconImport = dynamic<Partial<IconImport> | { slot: string }>(
  () => import('./IconImport').then((m) => m.SpIconImport as any),
  { ssr: false}
);
