import dynamic from 'next/dynamic';

import { IconSmallCaps } from '@spectrum-web-components/icons-workflow/src/elements/IconSmallCaps.js';

export const SpIconSmallCaps = dynamic<IconSmallCaps | { slot: string }>(
  () => import('./IconSmallCaps').then((m) => m.SpIconSmallCaps as any),
  { ssr: false}
);
