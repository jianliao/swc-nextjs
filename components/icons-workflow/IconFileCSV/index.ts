import dynamic from 'next/dynamic';

import { IconFileCSV } from '@spectrum-web-components/icons-workflow/src/elements/IconFileCSV.js';

export const SpIconFileCSV = dynamic<Partial<IconFileCSV> | { slot: string }>(
  () => import('./IconFileCSV').then((m) => m.SpIconFileCSV as any),
  { ssr: false}
);
