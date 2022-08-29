import dynamic from 'next/dynamic';

import { IconFileExcel } from '@spectrum-web-components/icons-workflow/src/elements/IconFileExcel.js';

export const SpIconFileExcel = dynamic<IconFileExcel | { slot: string }>(
  () => import('./IconFileExcel').then((m) => m.SpIconFileExcel as any),
  { ssr: false }
);
