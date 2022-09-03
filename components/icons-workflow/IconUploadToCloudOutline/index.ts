import dynamic from 'next/dynamic';

import { IconUploadToCloudOutline } from '@spectrum-web-components/icons-workflow/src/elements/IconUploadToCloudOutline.js';

export const SpIconUploadToCloudOutline = dynamic<Partial<IconUploadToCloudOutline> | { slot: string }>(
  () => import('./IconUploadToCloudOutline').then((m) => m.SpIconUploadToCloudOutline as any),
  { ssr: false}
);
