import dynamic from 'next/dynamic';

import { IconPauseCircle } from '@spectrum-web-components/icons-workflow/src/elements/IconPauseCircle.js';

export const SpIconPauseCircle = dynamic<Partial<IconPauseCircle> | { slot: string }>(
  () => import('./IconPauseCircle').then((m) => m.SpIconPauseCircle as any),
  { ssr: false }
);
