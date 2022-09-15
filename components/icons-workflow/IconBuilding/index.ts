import dynamic from 'next/dynamic';

import { IconBuilding } from '@spectrum-web-components/icons-workflow/src/elements/IconBuilding.js';

export const SpIconBuilding = dynamic<Partial<IconBuilding> | { slot: string }>(
  () => import('./IconBuilding').then((m) => m.SpIconBuilding as any),
  { ssr: false }
);
