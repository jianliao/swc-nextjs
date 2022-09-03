import dynamic from 'next/dynamic';

import { IconCross600 } from '@spectrum-web-components/icons-ui/src/elements/IconCross600.js';

export const SpIconCross600 = dynamic<Partial<IconCross600> | { slot: string }>(
  () => import('./IconCross600').then((m) => m.SpIconCross600 as any),
  { ssr: false}
);
