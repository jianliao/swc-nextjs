import dynamic from 'next/dynamic';

import { IconTextTracking } from '@spectrum-web-components/icons-workflow/src/elements/IconTextTracking.js';

export const SpIconTextTracking = dynamic<IconTextTracking | { slot: string }>(
  () => import('./IconTextTracking').then((m) => m.SpIconTextTracking as any),
  { ssr: false}
);
