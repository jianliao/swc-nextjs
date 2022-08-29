import dynamic from 'next/dynamic';

import { IconDeviceLaptop } from '@spectrum-web-components/icons-workflow/src/elements/IconDeviceLaptop.js';

export const SpIconDeviceLaptop = dynamic<IconDeviceLaptop | { slot: string }>(
  () => import('./IconDeviceLaptop').then((m) => m.SpIconDeviceLaptop as any),
  { ssr: false }
);
