import dynamic from 'next/dynamic';

import { IconCloudOutline } from '@spectrum-web-components/icons-workflow/src/elements/IconCloudOutline.js';

export const SpIconCloudOutline = dynamic<IconCloudOutline | { slot: string }>(
  () => import('./IconCloudOutline').then((m) => m.SpIconCloudOutline as any),
  { ssr: false}
);
