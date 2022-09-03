import dynamic from 'next/dynamic';

import { IconStepForward } from '@spectrum-web-components/icons-workflow/src/elements/IconStepForward.js';

export const SpIconStepForward = dynamic<Partial<IconStepForward> | { slot: string }>(
  () => import('./IconStepForward').then((m) => m.SpIconStepForward as any),
  { ssr: false}
);
