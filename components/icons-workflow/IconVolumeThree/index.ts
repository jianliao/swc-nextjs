import dynamic from 'next/dynamic';

import { IconVolumeThree } from '@spectrum-web-components/icons-workflow/src/elements/IconVolumeThree.js';

export const SpIconVolumeThree = dynamic<Partial<IconVolumeThree> | { slot: string }>(
  () => import('./IconVolumeThree').then((m) => m.SpIconVolumeThree as any),
  { ssr: false}
);
