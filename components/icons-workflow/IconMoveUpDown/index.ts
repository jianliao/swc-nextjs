import dynamic from 'next/dynamic';

import { IconMoveUpDown } from '@spectrum-web-components/icons-workflow/src/elements/IconMoveUpDown.js';

export const SpIconMoveUpDown = dynamic<IconMoveUpDown | { slot: string }>(
  () => import('./IconMoveUpDown').then((m) => m.SpIconMoveUpDown as any),
  { ssr: false}
);
