import dynamic from 'next/dynamic';

import { IconUploadToCloud } from '@spectrum-web-components/icons-workflow/src/elements/IconUploadToCloud.js';

export const SpIconUploadToCloud = dynamic<IconUploadToCloud | { slot: string }>(
  () => import('./IconUploadToCloud').then((m) => m.SpIconUploadToCloud as any),
  { ssr: false }
);
