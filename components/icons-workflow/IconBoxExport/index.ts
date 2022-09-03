import dynamic from 'next/dynamic';

import { IconBoxExport } from '@spectrum-web-components/icons-workflow/src/elements/IconBoxExport.js';

export const SpIconBoxExport = dynamic<Partial<IconBoxExport> | { slot: string }>(
  () => import('./IconBoxExport').then((m) => m.SpIconBoxExport as any),
  { ssr: false}
);
