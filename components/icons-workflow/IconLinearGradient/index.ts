import dynamic from 'next/dynamic';

import { IconLinearGradient } from '@spectrum-web-components/icons-workflow/src/elements/IconLinearGradient.js';

export const SpIconLinearGradient = dynamic<Partial<IconLinearGradient> | { slot: string }>(
  () => import('./IconLinearGradient').then((m) => m.SpIconLinearGradient as any),
  { ssr: false}
);
