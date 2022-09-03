import dynamic from 'next/dynamic';

import { IconArrow100 } from '@spectrum-web-components/icons-ui/src/elements/IconArrow100.js';

export const SpIconArrow100 = dynamic<Partial<IconArrow100> | { slot: string }>(
  () => import('./IconArrow100').then((m) => m.SpIconArrow100 as any),
  { ssr: false}
);
