import dynamic from 'next/dynamic';

import { IconFacebookCoverImage } from '@spectrum-web-components/icons-workflow/src/elements/IconFacebookCoverImage.js';

export const SpIconFacebookCoverImage = dynamic<Partial<IconFacebookCoverImage> | { slot: string }>(
  () => import('./IconFacebookCoverImage').then((m) => m.SpIconFacebookCoverImage as any),
  { ssr: false }
);
