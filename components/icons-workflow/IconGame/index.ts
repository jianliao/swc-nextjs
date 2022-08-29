import dynamic from 'next/dynamic';

import { IconGame } from '@spectrum-web-components/icons-workflow/src/elements/IconGame.js';

export const SpIconGame = dynamic<IconGame | { slot: string }>(
  () => import('./IconGame').then((m) => m.SpIconGame as any),
  { ssr: false}
);
