import dynamic from 'next/dynamic';

import { IconGlobeStrike } from '@spectrum-web-components/icons-workflow/src/elements/IconGlobeStrike.js';

export const SpIconGlobeStrike = dynamic<IconGlobeStrike | { slot: string }>(
  () => import('./IconGlobeStrike').then((m) => m.SpIconGlobeStrike as any),
  { ssr: false}
);
