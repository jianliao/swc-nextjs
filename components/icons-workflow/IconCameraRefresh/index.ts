import dynamic from 'next/dynamic';

import { IconCameraRefresh } from '@spectrum-web-components/icons-workflow/src/elements/IconCameraRefresh.js';

export const SpIconCameraRefresh = dynamic<IconCameraRefresh | { slot: string }>(
  () => import('./IconCameraRefresh').then((m) => m.SpIconCameraRefresh as any),
  { ssr: false}
);
