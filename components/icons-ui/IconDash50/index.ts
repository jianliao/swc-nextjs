import dynamic from 'next/dynamic';

import { IconDash50 } from '@spectrum-web-components/icons-ui/src/elements/IconDash50.js';

export const SpIconDash50 = dynamic<Partial<IconDash50> | { slot: string }>(
  () => import('./IconDash50').then((m) => m.SpIconDash50 as any),
  { ssr: false}
);
