import dynamic from 'next/dynamic';

import { IconCreditCard } from '@spectrum-web-components/icons-workflow/src/elements/IconCreditCard.js';

export const SpIconCreditCard = dynamic<Partial<IconCreditCard> | { slot: string }>(
  () => import('./IconCreditCard').then((m) => m.SpIconCreditCard as any),
  { ssr: false }
);
