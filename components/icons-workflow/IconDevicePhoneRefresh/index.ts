import dynamic from 'next/dynamic';

import { IconDevicePhoneRefresh } from '@spectrum-web-components/icons-workflow/src/elements/IconDevicePhoneRefresh.js';

export const SpIconDevicePhoneRefresh = dynamic<Partial<IconDevicePhoneRefresh> | { slot: string }>(
  () => import('./IconDevicePhoneRefresh').then((m) => m.SpIconDevicePhoneRefresh as any),
  { ssr: false }
);
