import dynamic from 'next/dynamic';

import { IconSelectionMove } from '@spectrum-web-components/icons-workflow/src/elements/IconSelectionMove.js';

export const SpIconSelectionMove = dynamic<Partial<IconSelectionMove> | { slot: string }>(
  () => import('./IconSelectionMove').then((m) => m.SpIconSelectionMove as any),
  { ssr: false}
);
