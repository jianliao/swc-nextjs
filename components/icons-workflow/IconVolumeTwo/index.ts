import dynamic from 'next/dynamic';

import { IconVolumeTwo } from '@spectrum-web-components/icons-workflow/src/elements/IconVolumeTwo.js';

export const SpIconVolumeTwo = dynamic<IconVolumeTwo | { slot: string }>(
  () => import('./IconVolumeTwo').then((m) => m.SpIconVolumeTwo as any),
  { ssr: false}
);
