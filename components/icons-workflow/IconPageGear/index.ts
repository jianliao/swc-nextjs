import dynamic from 'next/dynamic';

import { IconPageGear } from '@spectrum-web-components/icons-workflow/src/elements/IconPageGear.js';

export const SpIconPageGear = dynamic<Partial<IconPageGear> | { slot: string }>(
  () => import('./IconPageGear').then((m) => m.SpIconPageGear as any),
  { ssr: false }
);
