import dynamic from 'next/dynamic';

import { IconFileGear } from '@spectrum-web-components/icons-workflow/src/elements/IconFileGear.js';

export const SpIconFileGear = dynamic<Partial<IconFileGear> | { slot: string }>(
  () => import('./IconFileGear').then((m) => m.SpIconFileGear as any),
  { ssr: false}
);
