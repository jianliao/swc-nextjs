import dynamic from 'next/dynamic';

import { IconOfferDelete } from '@spectrum-web-components/icons-workflow/src/elements/IconOfferDelete.js';

export const SpIconOfferDelete = dynamic<Partial<IconOfferDelete> | { slot: string }>(
  () => import('./IconOfferDelete').then((m) => m.SpIconOfferDelete as any),
  { ssr: false}
);
