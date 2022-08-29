import dynamic from 'next/dynamic';

import { IconDash600 } from '@spectrum-web-components/icons-ui/src/elements/IconDash600.js';

export const SpIconDash600 = dynamic<IconDash600 | { slot: string }>(
  () => import('./IconDash600').then((m) => m.SpIconDash600 as any),
  { ssr: false}
);
