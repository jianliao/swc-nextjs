import dynamic from 'next/dynamic';

import { IconDownloadFromCloud } from '@spectrum-web-components/icons-workflow/src/elements/IconDownloadFromCloud.js';

export const SpIconDownloadFromCloud = dynamic<IconDownloadFromCloud | { slot: string }>(
  () => import('./IconDownloadFromCloud').then((m) => m.SpIconDownloadFromCloud as any),
  { ssr: false }
);
