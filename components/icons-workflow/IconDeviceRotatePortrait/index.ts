import dynamic from 'next/dynamic';

import { IconDeviceRotatePortrait } from '@spectrum-web-components/icons-workflow/src/elements/IconDeviceRotatePortrait.js';

export const SpIconDeviceRotatePortrait = dynamic<
  Partial<IconDeviceRotatePortrait> | { slot: string }
>(() => import('./IconDeviceRotatePortrait').then((m) => m.SpIconDeviceRotatePortrait as any), {
  ssr: false,
});
