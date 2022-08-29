import dynamic from 'next/dynamic';

import { IconGlobeGrid } from '@spectrum-web-components/icons-workflow/src/elements/IconGlobeGrid.js';

export const SpIconGlobeGrid = dynamic<IconGlobeGrid | { slot: string }>(
  () => import('./IconGlobeGrid').then((m) => m.SpIconGlobeGrid as any),
  { ssr: false }
);
