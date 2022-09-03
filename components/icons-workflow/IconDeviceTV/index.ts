import dynamic from 'next/dynamic';

import { IconDeviceTV } from '@spectrum-web-components/icons-workflow/src/elements/IconDeviceTV.js';

export const SpIconDeviceTV = dynamic<Partial<IconDeviceTV> | { slot: string }>(
  () => import('./IconDeviceTV').then((m) => m.SpIconDeviceTV as any),
  { ssr: false}
);
