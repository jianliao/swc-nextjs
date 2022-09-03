import dynamic from 'next/dynamic';

import { IconGlobeCheck } from '@spectrum-web-components/icons-workflow/src/elements/IconGlobeCheck.js';

export const SpIconGlobeCheck = dynamic<Partial<IconGlobeCheck> | { slot: string }>(
  () => import('./IconGlobeCheck').then((m) => m.SpIconGlobeCheck as any),
  { ssr: false}
);
