import dynamic from 'next/dynamic';

import { IconCropLightning } from '@spectrum-web-components/icons-workflow/src/elements/IconCropLightning.js';

export const SpIconCropLightning = dynamic<IconCropLightning | { slot: string }>(
  () => import('./IconCropLightning').then((m) => m.SpIconCropLightning as any),
  { ssr: false }
);
