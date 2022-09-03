import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { Thumbnail } from '@spectrum-web-components/thumbnail';

const ssr = false;

export const SpThumbnail = dynamic<Partial<Thumbnail> | { children?: ReactNode }>(
  () => import('./Thumbnail').then((m) => m.SpThumbnail as any),
  { ssr }
);
