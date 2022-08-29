import dynamic from 'next/dynamic';

import { IconTextBulleted } from '@spectrum-web-components/icons-workflow/src/elements/IconTextBulleted.js';

export const SpIconTextBulleted = dynamic<IconTextBulleted | { slot: string }>(
  () => import('./IconTextBulleted').then((m) => m.SpIconTextBulleted as any),
  { ssr: false }
);
