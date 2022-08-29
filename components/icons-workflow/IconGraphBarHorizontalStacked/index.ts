import dynamic from 'next/dynamic';

import { IconGraphBarHorizontalStacked } from '@spectrum-web-components/icons-workflow/src/elements/IconGraphBarHorizontalStacked.js';

export const SpIconGraphBarHorizontalStacked = dynamic<IconGraphBarHorizontalStacked | { slot: string }>(
  () => import('./IconGraphBarHorizontalStacked').then((m) => m.SpIconGraphBarHorizontalStacked as any),
  { ssr: false}
);
