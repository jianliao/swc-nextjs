import dynamic from 'next/dynamic';

import { IconVolumeOne } from '@spectrum-web-components/icons-workflow/src/elements/IconVolumeOne.js';

export const SpIconVolumeOne = dynamic<Partial<IconVolumeOne> | { slot: string }>(
  () => import('./IconVolumeOne').then((m) => m.SpIconVolumeOne as any),
  { ssr: false}
);
