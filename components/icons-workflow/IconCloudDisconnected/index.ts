import dynamic from 'next/dynamic';

import { IconCloudDisconnected } from '@spectrum-web-components/icons-workflow/src/elements/IconCloudDisconnected.js';

export const SpIconCloudDisconnected = dynamic<IconCloudDisconnected | { slot: string }>(
  () => import('./IconCloudDisconnected').then((m) => m.SpIconCloudDisconnected as any),
  { ssr: false }
);
