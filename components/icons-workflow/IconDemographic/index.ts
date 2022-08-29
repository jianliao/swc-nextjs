import dynamic from 'next/dynamic';

import { IconDemographic } from '@spectrum-web-components/icons-workflow/src/elements/IconDemographic.js';

export const SpIconDemographic = dynamic<IconDemographic | { slot: string }>(
  () => import('./IconDemographic').then((m) => m.SpIconDemographic as any),
  { ssr: false }
);
