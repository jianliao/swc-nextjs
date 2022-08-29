import dynamic from 'next/dynamic';

import { IconDataDownload } from '@spectrum-web-components/icons-workflow/src/elements/IconDataDownload.js';

export const SpIconDataDownload = dynamic<IconDataDownload | { slot: string }>(
  () => import('./IconDataDownload').then((m) => m.SpIconDataDownload as any),
  { ssr: false}
);
