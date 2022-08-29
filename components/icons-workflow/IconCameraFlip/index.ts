import dynamic from 'next/dynamic';

import { IconCameraFlip } from '@spectrum-web-components/icons-workflow/src/elements/IconCameraFlip.js';

export const SpIconCameraFlip = dynamic<IconCameraFlip | { slot: string }>(
  () => import('./IconCameraFlip').then((m) => m.SpIconCameraFlip as any),
  { ssr: false}
);
