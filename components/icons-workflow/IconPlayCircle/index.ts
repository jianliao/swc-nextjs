import dynamic from 'next/dynamic';

import { IconPlayCircle } from '@spectrum-web-components/icons-workflow/src/elements/IconPlayCircle.js';

export const SpIconPlayCircle = dynamic<Partial<IconPlayCircle> | { slot: string }>(
  () => import('./IconPlayCircle').then((m) => m.SpIconPlayCircle as any),
  { ssr: false}
);
