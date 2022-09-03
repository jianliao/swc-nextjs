import dynamic from 'next/dynamic';

import { IconDownload } from '@spectrum-web-components/icons-workflow/src/elements/IconDownload.js';

export const SpIconDownload = dynamic<Partial<IconDownload> | { slot: string }>(
  () => import('./IconDownload').then((m) => m.SpIconDownload as any),
  { ssr: false}
);
