import dynamic from 'next/dynamic';

import { IconClock } from '@spectrum-web-components/icons-workflow/src/elements/IconClock.js';

export const SpIconClock = dynamic<IconClock | { slot: string }>(
  () => import('./IconClock').then((m) => m.SpIconClock as any),
  { ssr: false}
);
