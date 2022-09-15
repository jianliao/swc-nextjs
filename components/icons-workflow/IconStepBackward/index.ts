import dynamic from 'next/dynamic';

import { IconStepBackward } from '@spectrum-web-components/icons-workflow/src/elements/IconStepBackward.js';

export const SpIconStepBackward = dynamic<Partial<IconStepBackward> | { slot: string }>(
  () => import('./IconStepBackward').then((m) => m.SpIconStepBackward as any),
  { ssr: false }
);
