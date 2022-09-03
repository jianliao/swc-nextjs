import dynamic from 'next/dynamic';

import { IconEmailGear } from '@spectrum-web-components/icons-workflow/src/elements/IconEmailGear.js';

export const SpIconEmailGear = dynamic<Partial<IconEmailGear> | { slot: string }>(
  () => import('./IconEmailGear').then((m) => m.SpIconEmailGear as any),
  { ssr: false}
);
