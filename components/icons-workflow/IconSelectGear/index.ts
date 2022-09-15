import dynamic from 'next/dynamic';

import { IconSelectGear } from '@spectrum-web-components/icons-workflow/src/elements/IconSelectGear.js';

export const SpIconSelectGear = dynamic<Partial<IconSelectGear> | { slot: string }>(
  () => import('./IconSelectGear').then((m) => m.SpIconSelectGear as any),
  { ssr: false }
);
