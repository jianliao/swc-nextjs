import dynamic from 'next/dynamic';

import { IconImage } from '@spectrum-web-components/icons-workflow/src/elements/IconImage.js';

export const SpIconImage = dynamic<IconImage | { slot: string }>(
  () => import('./IconImage').then((m) => m.SpIconImage as any),
  { ssr: false}
);
