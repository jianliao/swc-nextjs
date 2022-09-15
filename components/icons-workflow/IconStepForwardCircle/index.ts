import dynamic from 'next/dynamic';

import { IconStepForwardCircle } from '@spectrum-web-components/icons-workflow/src/elements/IconStepForwardCircle.js';

export const SpIconStepForwardCircle = dynamic<Partial<IconStepForwardCircle> | { slot: string }>(
  () => import('./IconStepForwardCircle').then((m) => m.SpIconStepForwardCircle as any),
  { ssr: false }
);
