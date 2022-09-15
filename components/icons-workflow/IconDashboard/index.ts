import dynamic from 'next/dynamic';

import { IconDashboard } from '@spectrum-web-components/icons-workflow/src/elements/IconDashboard.js';

export const SpIconDashboard = dynamic<Partial<IconDashboard> | { slot: string }>(
  () => import('./IconDashboard').then((m) => m.SpIconDashboard as any),
  { ssr: false }
);
