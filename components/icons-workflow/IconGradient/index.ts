import dynamic from 'next/dynamic';

import { IconGradient } from '@spectrum-web-components/icons-workflow/src/elements/IconGradient.js';

export const SpIconGradient = dynamic<Partial<IconGradient> | { slot: string }>(
  () => import('./IconGradient').then((m) => m.SpIconGradient as any),
  { ssr: false}
);
