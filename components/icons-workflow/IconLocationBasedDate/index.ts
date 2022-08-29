import dynamic from 'next/dynamic';

import { IconLocationBasedDate } from '@spectrum-web-components/icons-workflow/src/elements/IconLocationBasedDate.js';

export const SpIconLocationBasedDate = dynamic<IconLocationBasedDate | { slot: string }>(
  () => import('./IconLocationBasedDate').then((m) => m.SpIconLocationBasedDate as any),
  { ssr: false }
);
