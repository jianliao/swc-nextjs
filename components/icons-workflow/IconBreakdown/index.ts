import dynamic from 'next/dynamic';

import { IconBreakdown } from '@spectrum-web-components/icons-workflow/src/elements/IconBreakdown.js';

export const SpIconBreakdown = dynamic<Partial<IconBreakdown> | { slot: string }>(
  () => import('./IconBreakdown').then((m) => m.SpIconBreakdown as any),
  { ssr: false}
);
