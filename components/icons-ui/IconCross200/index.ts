import dynamic from 'next/dynamic';

import { IconCross200 } from '@spectrum-web-components/icons-ui/src/elements/IconCross200.js';

export const SpIconCross200 = dynamic<Partial<IconCross200> | { slot: string }>(
  () => import('./IconCross200').then((m) => m.SpIconCross200 as any),
  { ssr: false }
);
