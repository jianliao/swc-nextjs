import dynamic from 'next/dynamic';

import { IconDownloadFromCloudOutline } from '@spectrum-web-components/icons-workflow/src/elements/IconDownloadFromCloudOutline.js';

export const SpIconDownloadFromCloudOutline = dynamic<
  Partial<IconDownloadFromCloudOutline> | { slot: string }
>(
  () =>
    import('./IconDownloadFromCloudOutline').then((m) => m.SpIconDownloadFromCloudOutline as any),
  { ssr: false }
);
