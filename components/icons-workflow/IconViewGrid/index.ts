import dynamic from 'next/dynamic';

import { IconViewGrid } from '@spectrum-web-components/icons-workflow/src/elements/IconViewGrid.js';

export const SpIconViewGrid = dynamic<Partial<IconViewGrid> | { slot: string }>(
  () => import('./IconViewGrid').then((m) => m.SpIconViewGrid as any),
  { ssr: false }
);
