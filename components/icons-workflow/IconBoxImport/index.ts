import dynamic from 'next/dynamic';

import { IconBoxImport } from '@spectrum-web-components/icons-workflow/src/elements/IconBoxImport.js';

export const SpIconBoxImport = dynamic<Partial<IconBoxImport> | { slot: string }>(
  () => import('./IconBoxImport').then((m) => m.SpIconBoxImport as any),
  { ssr: false }
);
