import dynamic from 'next/dynamic';

import { IconArrow200 } from '@spectrum-web-components/icons-ui/src/elements/IconArrow200.js';

export const SpIconArrow200 = dynamic<Partial<IconArrow200> | { slot: string }>(
  () => import('./IconArrow200').then((m) => m.SpIconArrow200 as any),
  { ssr: false}
);
