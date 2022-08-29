import dynamic from 'next/dynamic';

import { IconHome } from '@spectrum-web-components/icons-workflow/src/elements/IconHome.js';

export const SpIconHome = dynamic<IconHome | { slot: string }>(
  () => import('./IconHome').then((m) => m.SpIconHome as any),
  { ssr: false}
);
