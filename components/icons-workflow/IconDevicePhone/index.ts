import dynamic from 'next/dynamic';

import { IconDevicePhone } from '@spectrum-web-components/icons-workflow/src/elements/IconDevicePhone.js';

export const SpIconDevicePhone = dynamic<Partial<IconDevicePhone> | { slot: string }>(
  () => import('./IconDevicePhone').then((m) => m.SpIconDevicePhone as any),
  { ssr: false }
);
