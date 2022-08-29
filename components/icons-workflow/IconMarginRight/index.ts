import dynamic from 'next/dynamic';

import { IconMarginRight } from '@spectrum-web-components/icons-workflow/src/elements/IconMarginRight.js';

export const SpIconMarginRight = dynamic<IconMarginRight | { slot: string }>(
  () => import('./IconMarginRight').then((m) => m.SpIconMarginRight as any),
  { ssr: false }
);
