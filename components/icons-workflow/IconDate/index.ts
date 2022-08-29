import dynamic from 'next/dynamic';

import { IconDate } from '@spectrum-web-components/icons-workflow/src/elements/IconDate.js';

export const SpIconDate = dynamic<IconDate | { slot: string }>(
  () => import('./IconDate').then((m) => m.SpIconDate as any),
  { ssr: false }
);
