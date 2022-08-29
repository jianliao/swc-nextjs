import dynamic from 'next/dynamic';

import { IconIntersectOverlap } from '@spectrum-web-components/icons-workflow/src/elements/IconIntersectOverlap.js';

export const SpIconIntersectOverlap = dynamic<IconIntersectOverlap | { slot: string }>(
  () => import('./IconIntersectOverlap').then((m) => m.SpIconIntersectOverlap as any),
  { ssr: false}
);
