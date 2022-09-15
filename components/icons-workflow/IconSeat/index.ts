import dynamic from 'next/dynamic';

import { IconSeat } from '@spectrum-web-components/icons-workflow/src/elements/IconSeat.js';

export const SpIconSeat = dynamic<Partial<IconSeat> | { slot: string }>(
  () => import('./IconSeat').then((m) => m.SpIconSeat as any),
  { ssr: false }
);
