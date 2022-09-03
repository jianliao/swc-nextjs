import dynamic from 'next/dynamic';

import { IconArrow300 } from '@spectrum-web-components/icons-ui/src/elements/IconArrow300.js';

export const SpIconArrow300 = dynamic<Partial<IconArrow300> | { slot: string }>(
  () => import('./IconArrow300').then((m) => m.SpIconArrow300 as any),
  { ssr: false}
);
