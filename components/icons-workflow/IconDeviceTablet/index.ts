import dynamic from 'next/dynamic';

import { IconDeviceTablet } from '@spectrum-web-components/icons-workflow/src/elements/IconDeviceTablet.js';

export const SpIconDeviceTablet = dynamic<Partial<IconDeviceTablet> | { slot: string }>(
  () => import('./IconDeviceTablet').then((m) => m.SpIconDeviceTablet as any),
  { ssr: false }
);
