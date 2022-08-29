import dynamic from 'next/dynamic';

import { IconPlay } from '@spectrum-web-components/icons-workflow/src/elements/IconPlay.js';

export const SpIconPlay = dynamic<IconPlay | { slot: string }>(
  () => import('./IconPlay').then((m) => m.SpIconPlay as any),
  { ssr: false}
);
