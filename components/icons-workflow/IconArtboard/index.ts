import dynamic from 'next/dynamic';

import { IconArtboard } from '@spectrum-web-components/icons-workflow/src/elements/IconArtboard.js';

export const SpIconArtboard = dynamic<Partial<IconArtboard> | { slot: string }>(
  () => import('./IconArtboard').then((m) => m.SpIconArtboard as any),
  { ssr: false }
);
