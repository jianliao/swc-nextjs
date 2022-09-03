import dynamic from 'next/dynamic';

import { IconCrop } from '@spectrum-web-components/icons-workflow/src/elements/IconCrop.js';

export const SpIconCrop = dynamic<Partial<IconCrop> | { slot: string }>(
  () => import('./IconCrop').then((m) => m.SpIconCrop as any),
  { ssr: false}
);
