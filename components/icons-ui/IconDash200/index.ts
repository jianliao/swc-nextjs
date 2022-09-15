import dynamic from 'next/dynamic';

import { IconDash200 } from '@spectrum-web-components/icons-ui/src/elements/IconDash200.js';

export const SpIconDash200 = dynamic<Partial<IconDash200> | { slot: string }>(
  () => import('./IconDash200').then((m) => m.SpIconDash200 as any),
  { ssr: false }
);
