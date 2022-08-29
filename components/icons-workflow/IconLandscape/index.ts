import dynamic from 'next/dynamic';

import { IconLandscape } from '@spectrum-web-components/icons-workflow/src/elements/IconLandscape.js';

export const SpIconLandscape = dynamic<IconLandscape | { slot: string }>(
  () => import('./IconLandscape').then((m) => m.SpIconLandscape as any),
  { ssr: false}
);
