import dynamic from 'next/dynamic';

import { IconOffer } from '@spectrum-web-components/icons-workflow/src/elements/IconOffer.js';

export const SpIconOffer = dynamic<IconOffer | { slot: string }>(
  () => import('./IconOffer').then((m) => m.SpIconOffer as any),
  { ssr: false}
);
