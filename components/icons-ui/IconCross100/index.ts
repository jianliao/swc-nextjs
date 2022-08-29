import dynamic from 'next/dynamic';

import { IconCross100 } from '@spectrum-web-components/icons-ui/src/elements/IconCross100.js';

export const SpIconCross100 = dynamic<IconCross100 | { slot: string }>(
  () => import('./IconCross100').then((m) => m.SpIconCross100 as any),
  { ssr: false}
);
