import dynamic from 'next/dynamic';

import { IconCropRotate } from '@spectrum-web-components/icons-workflow/src/elements/IconCropRotate.js';

export const SpIconCropRotate = dynamic<IconCropRotate | { slot: string }>(
  () => import('./IconCropRotate').then((m) => m.SpIconCropRotate as any),
  { ssr: false}
);
