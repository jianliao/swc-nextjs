import dynamic from 'next/dynamic';

import { IconExport } from '@spectrum-web-components/icons-workflow/src/elements/IconExport.js';

export const SpIconExport = dynamic<Partial<IconExport> | { slot: string }>(
  () => import('./IconExport').then((m) => m.SpIconExport as any),
  { ssr: false}
);
