import dynamic from 'next/dynamic';

import { IconCar } from '@spectrum-web-components/icons-workflow/src/elements/IconCar.js';

export const SpIconCar = dynamic<Partial<IconCar> | { slot: string }>(
  () => import('./IconCar').then((m) => m.SpIconCar as any),
  { ssr: false}
);
