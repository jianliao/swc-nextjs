import dynamic from 'next/dynamic';

import { IconPortrait } from '@spectrum-web-components/icons-workflow/src/elements/IconPortrait.js';

export const SpIconPortrait = dynamic<Partial<IconPortrait> | { slot: string }>(
  () => import('./IconPortrait').then((m) => m.SpIconPortrait as any),
  { ssr: false}
);
