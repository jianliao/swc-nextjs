import dynamic from 'next/dynamic';

import { IconTextAlignRight } from '@spectrum-web-components/icons-workflow/src/elements/IconTextAlignRight.js';

export const SpIconTextAlignRight = dynamic<IconTextAlignRight | { slot: string }>(
  () => import('./IconTextAlignRight').then((m) => m.SpIconTextAlignRight as any),
  { ssr: false}
);
