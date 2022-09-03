import dynamic from 'next/dynamic';

import { IconRadialGradient } from '@spectrum-web-components/icons-workflow/src/elements/IconRadialGradient.js';

export const SpIconRadialGradient = dynamic<Partial<IconRadialGradient> | { slot: string }>(
  () => import('./IconRadialGradient').then((m) => m.SpIconRadialGradient as any),
  { ssr: false}
);
