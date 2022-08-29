import dynamic from 'next/dynamic';

import { IconStepBackwardCircle } from '@spectrum-web-components/icons-workflow/src/elements/IconStepBackwardCircle.js';

export const SpIconStepBackwardCircle = dynamic<IconStepBackwardCircle | { slot: string }>(
  () => import('./IconStepBackwardCircle').then((m) => m.SpIconStepBackwardCircle as any),
  { ssr: false}
);
