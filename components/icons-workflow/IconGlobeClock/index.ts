import dynamic from 'next/dynamic';

import { IconGlobeClock } from '@spectrum-web-components/icons-workflow/src/elements/IconGlobeClock.js';

export const SpIconGlobeClock = dynamic<IconGlobeClock | { slot: string }>(
  () => import('./IconGlobeClock').then((m) => m.SpIconGlobeClock as any),
  { ssr: false}
);
