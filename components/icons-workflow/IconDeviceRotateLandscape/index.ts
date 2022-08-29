import dynamic from 'next/dynamic';

import { IconDeviceRotateLandscape } from '@spectrum-web-components/icons-workflow/src/elements/IconDeviceRotateLandscape.js';

export const SpIconDeviceRotateLandscape = dynamic<IconDeviceRotateLandscape | { slot: string }>(
  () => import('./IconDeviceRotateLandscape').then((m) => m.SpIconDeviceRotateLandscape as any),
  { ssr: false}
);
