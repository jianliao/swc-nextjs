import dynamic from 'next/dynamic';

import { IconAirplane } from '@spectrum-web-components/icons-workflow/src/elements/IconAirplane.js';

export const SpIconAirplane = dynamic<IconAirplane | { slot: string }>(
  () => import('./IconAirplane').then((m) => m.SpIconAirplane as any),
  { ssr: false }
);
