import dynamic from 'next/dynamic';

import { IconDeviceDesktop } from '@spectrum-web-components/icons-workflow/src/elements/IconDeviceDesktop.js';

export const SpIconDeviceDesktop = dynamic<Partial<IconDeviceDesktop> | { slot: string }>(
  () => import('./IconDeviceDesktop').then((m) => m.SpIconDeviceDesktop as any),
  { ssr: false}
);
