import dynamic from 'next/dynamic';

import { IconMeasure } from '@spectrum-web-components/icons-workflow/src/elements/IconMeasure.js';

export const SpIconMeasure = dynamic<IconMeasure | { slot: string }>(
  () => import('./IconMeasure').then((m) => m.SpIconMeasure as any),
  { ssr: false}
);
