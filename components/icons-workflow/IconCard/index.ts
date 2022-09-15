import dynamic from 'next/dynamic';

import { IconCard } from '@spectrum-web-components/icons-workflow/src/elements/IconCard.js';

export const SpIconCard = dynamic<Partial<IconCard> | { slot: string }>(
  () => import('./IconCard').then((m) => m.SpIconCard as any),
  { ssr: false }
);
