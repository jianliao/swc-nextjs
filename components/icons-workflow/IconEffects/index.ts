import dynamic from 'next/dynamic';

import { IconEffects } from '@spectrum-web-components/icons-workflow/src/elements/IconEffects.js';

export const SpIconEffects = dynamic<IconEffects | { slot: string }>(
  () => import('./IconEffects').then((m) => m.SpIconEffects as any),
  { ssr: false }
);
