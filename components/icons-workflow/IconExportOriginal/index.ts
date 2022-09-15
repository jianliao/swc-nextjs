import dynamic from 'next/dynamic';

import { IconExportOriginal } from '@spectrum-web-components/icons-workflow/src/elements/IconExportOriginal.js';

export const SpIconExportOriginal = dynamic<Partial<IconExportOriginal> | { slot: string }>(
  () => import('./IconExportOriginal').then((m) => m.SpIconExportOriginal as any),
  { ssr: false }
);
