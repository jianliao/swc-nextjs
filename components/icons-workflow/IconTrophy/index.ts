import dynamic from 'next/dynamic';

import { IconTrophy } from '@spectrum-web-components/icons-workflow/src/elements/IconTrophy.js';

export const SpIconTrophy = dynamic<IconTrophy | { slot: string }>(
  () => import('./IconTrophy').then((m) => m.SpIconTrophy as any),
  { ssr: false }
);
