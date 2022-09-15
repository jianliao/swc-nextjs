import dynamic from 'next/dynamic';

import { IconViewDetail } from '@spectrum-web-components/icons-workflow/src/elements/IconViewDetail.js';

export const SpIconViewDetail = dynamic<Partial<IconViewDetail> | { slot: string }>(
  () => import('./IconViewDetail').then((m) => m.SpIconViewDetail as any),
  { ssr: false }
);
