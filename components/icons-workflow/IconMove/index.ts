import dynamic from 'next/dynamic';

import { IconMove } from '@spectrum-web-components/icons-workflow/src/elements/IconMove.js';

export const SpIconMove = dynamic<Partial<IconMove> | { slot: string }>(
  () => import('./IconMove').then((m) => m.SpIconMove as any),
  { ssr: false }
);
