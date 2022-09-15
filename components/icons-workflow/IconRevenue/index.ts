import dynamic from 'next/dynamic';

import { IconRevenue } from '@spectrum-web-components/icons-workflow/src/elements/IconRevenue.js';

export const SpIconRevenue = dynamic<Partial<IconRevenue> | { slot: string }>(
  () => import('./IconRevenue').then((m) => m.SpIconRevenue as any),
  { ssr: false }
);
