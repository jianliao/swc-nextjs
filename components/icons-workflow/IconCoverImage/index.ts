import dynamic from 'next/dynamic';

import { IconCoverImage } from '@spectrum-web-components/icons-workflow/src/elements/IconCoverImage.js';

export const SpIconCoverImage = dynamic<IconCoverImage | { slot: string }>(
  () => import('./IconCoverImage').then((m) => m.SpIconCoverImage as any),
  { ssr: false}
);
