import dynamic from 'next/dynamic';

import { IconRotateCCW } from '@spectrum-web-components/icons-workflow/src/elements/IconRotateCCW.js';

export const SpIconRotateCCW = dynamic<IconRotateCCW | { slot: string }>(
  () => import('./IconRotateCCW').then((m) => m.SpIconRotateCCW as any),
  { ssr: false}
);
