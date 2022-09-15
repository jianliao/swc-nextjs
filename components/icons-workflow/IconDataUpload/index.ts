import dynamic from 'next/dynamic';

import { IconDataUpload } from '@spectrum-web-components/icons-workflow/src/elements/IconDataUpload.js';

export const SpIconDataUpload = dynamic<Partial<IconDataUpload> | { slot: string }>(
  () => import('./IconDataUpload').then((m) => m.SpIconDataUpload as any),
  { ssr: false }
);
