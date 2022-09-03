import dynamic from 'next/dynamic';

import { IconShuffle } from '@spectrum-web-components/icons-workflow/src/elements/IconShuffle.js';

export const SpIconShuffle = dynamic<Partial<IconShuffle> | { slot: string }>(
  () => import('./IconShuffle').then((m) => m.SpIconShuffle as any),
  { ssr: false}
);
