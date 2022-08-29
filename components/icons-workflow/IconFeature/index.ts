import dynamic from 'next/dynamic';

import { IconFeature } from '@spectrum-web-components/icons-workflow/src/elements/IconFeature.js';

export const SpIconFeature = dynamic<IconFeature | { slot: string }>(
  () => import('./IconFeature').then((m) => m.SpIconFeature as any),
  { ssr: false }
);
