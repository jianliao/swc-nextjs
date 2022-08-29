import dynamic from 'next/dynamic';

import { IconGlobeStrikeClock } from '@spectrum-web-components/icons-workflow/src/elements/IconGlobeStrikeClock.js';

export const SpIconGlobeStrikeClock = dynamic<IconGlobeStrikeClock | { slot: string }>(
  () => import('./IconGlobeStrikeClock').then((m) => m.SpIconGlobeStrikeClock as any),
  { ssr: false}
);
