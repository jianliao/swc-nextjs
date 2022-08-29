import dynamic from 'next/dynamic';

import { IconStadium } from '@spectrum-web-components/icons-workflow/src/elements/IconStadium.js';

export const SpIconStadium = dynamic<IconStadium | { slot: string }>(
  () => import('./IconStadium').then((m) => m.SpIconStadium as any),
  { ssr: false }
);
