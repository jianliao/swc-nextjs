import dynamic from 'next/dynamic';

import { IconRotateCCWBold } from '@spectrum-web-components/icons-workflow/src/elements/IconRotateCCWBold.js';

export const SpIconRotateCCWBold = dynamic<Partial<IconRotateCCWBold> | { slot: string }>(
  () => import('./IconRotateCCWBold').then((m) => m.SpIconRotateCCWBold as any),
  { ssr: false }
);
