import dynamic from 'next/dynamic';

import { IconDash400 } from '@spectrum-web-components/icons-ui/src/elements/IconDash400.js';

export const SpIconDash400 = dynamic<IconDash400 | { slot: string }>(
  () => import('./IconDash400').then((m) => m.SpIconDash400 as any),
  { ssr: false }
);
