import dynamic from 'next/dynamic';

import { IconCross400 } from '@spectrum-web-components/icons-ui/src/elements/IconCross400.js';

export const SpIconCross400 = dynamic<IconCross400 | { slot: string }>(
  () => import('./IconCross400').then((m) => m.SpIconCross400 as any),
  { ssr: false }
);
