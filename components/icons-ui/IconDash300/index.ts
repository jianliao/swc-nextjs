import dynamic from 'next/dynamic';

import { IconDash300 } from '@spectrum-web-components/icons-ui/src/elements/IconDash300.js';

export const SpIconDash300 = dynamic<Partial<IconDash300> | { slot: string }>(
  () => import('./IconDash300').then((m) => m.SpIconDash300 as any),
  { ssr: false}
);
