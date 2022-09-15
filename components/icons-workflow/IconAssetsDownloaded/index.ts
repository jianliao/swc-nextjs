import dynamic from 'next/dynamic';

import { IconAssetsDownloaded } from '@spectrum-web-components/icons-workflow/src/elements/IconAssetsDownloaded.js';

export const SpIconAssetsDownloaded = dynamic<Partial<IconAssetsDownloaded> | { slot: string }>(
  () => import('./IconAssetsDownloaded').then((m) => m.SpIconAssetsDownloaded as any),
  { ssr: false }
);
