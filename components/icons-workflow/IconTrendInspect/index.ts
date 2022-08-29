import dynamic from 'next/dynamic';

import { IconTrendInspect } from '@spectrum-web-components/icons-workflow/src/elements/IconTrendInspect.js';

export const SpIconTrendInspect = dynamic<IconTrendInspect | { slot: string }>(
  () => import('./IconTrendInspect').then((m) => m.SpIconTrendInspect as any),
  { ssr: false }
);
