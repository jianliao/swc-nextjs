import dynamic from 'next/dynamic';

import { IconTextBaselineShift } from '@spectrum-web-components/icons-workflow/src/elements/IconTextBaselineShift.js';

export const SpIconTextBaselineShift = dynamic<IconTextBaselineShift | { slot: string }>(
  () => import('./IconTextBaselineShift').then((m) => m.SpIconTextBaselineShift as any),
  { ssr: false}
);
