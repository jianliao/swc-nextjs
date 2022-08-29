import dynamic from 'next/dynamic';

import { IconArrow600 } from '@spectrum-web-components/icons-ui/src/elements/IconArrow600.js';

export const SpIconArrow600 = dynamic<IconArrow600 | { slot: string }>(
  () => import('./IconArrow600').then((m) => m.SpIconArrow600 as any),
  { ssr: false }
);
