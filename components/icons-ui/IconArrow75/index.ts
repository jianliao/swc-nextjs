import dynamic from 'next/dynamic';

import { IconArrow75 } from '@spectrum-web-components/icons-ui/src/elements/IconArrow75.js';

export const SpIconArrow75 = dynamic<Partial<IconArrow75> | { slot: string }>(
  () => import('./IconArrow75').then((m) => m.SpIconArrow75 as any),
  { ssr: false }
);
