import dynamic from 'next/dynamic';

import { IconCross500 } from '@spectrum-web-components/icons-ui/src/elements/IconCross500.js';

export const SpIconCross500 = dynamic<IconCross500 | { slot: string }>(
  () => import('./IconCross500').then((m) => m.SpIconCross500 as any),
  { ssr: false }
);
