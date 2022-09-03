import dynamic from 'next/dynamic';

import { IconDevices } from '@spectrum-web-components/icons-workflow/src/elements/IconDevices.js';

export const SpIconDevices = dynamic<Partial<IconDevices> | { slot: string }>(
  () => import('./IconDevices').then((m) => m.SpIconDevices as any),
  { ssr: false}
);
