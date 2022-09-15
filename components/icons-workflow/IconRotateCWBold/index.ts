import dynamic from 'next/dynamic';

import { IconRotateCWBold } from '@spectrum-web-components/icons-workflow/src/elements/IconRotateCWBold.js';

export const SpIconRotateCWBold = dynamic<Partial<IconRotateCWBold> | { slot: string }>(
  () => import('./IconRotateCWBold').then((m) => m.SpIconRotateCWBold as any),
  { ssr: false }
);
