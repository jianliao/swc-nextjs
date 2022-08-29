import dynamic from 'next/dynamic';

import { IconRotateCW } from '@spectrum-web-components/icons-workflow/src/elements/IconRotateCW.js';

export const SpIconRotateCW = dynamic<IconRotateCW | { slot: string }>(
  () => import('./IconRotateCW').then((m) => m.SpIconRotateCW as any),
  { ssr: false}
);
