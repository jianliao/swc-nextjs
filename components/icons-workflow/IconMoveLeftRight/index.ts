import dynamic from 'next/dynamic';

import { IconMoveLeftRight } from '@spectrum-web-components/icons-workflow/src/elements/IconMoveLeftRight.js';

export const SpIconMoveLeftRight = dynamic<IconMoveLeftRight | { slot: string }>(
  () => import('./IconMoveLeftRight').then((m) => m.SpIconMoveLeftRight as any),
  { ssr: false }
);
