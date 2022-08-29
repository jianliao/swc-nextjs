import dynamic from 'next/dynamic';

import { IconViewCard } from '@spectrum-web-components/icons-workflow/src/elements/IconViewCard.js';

export const SpIconViewCard = dynamic<IconViewCard | { slot: string }>(
  () => import('./IconViewCard').then((m) => m.SpIconViewCard as any),
  { ssr: false}
);
