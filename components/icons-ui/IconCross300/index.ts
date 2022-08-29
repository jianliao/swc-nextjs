import dynamic from 'next/dynamic';

import { IconCross300 } from '@spectrum-web-components/icons-ui/src/elements/IconCross300.js';

export const SpIconCross300 = dynamic<IconCross300 | { slot: string }>(
  () => import('./IconCross300').then((m) => m.SpIconCross300 as any),
  { ssr: false}
);
