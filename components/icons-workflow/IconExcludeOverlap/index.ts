import dynamic from 'next/dynamic';

import { IconExcludeOverlap } from '@spectrum-web-components/icons-workflow/src/elements/IconExcludeOverlap.js';

export const SpIconExcludeOverlap = dynamic<IconExcludeOverlap | { slot: string }>(
  () => import('./IconExcludeOverlap').then((m) => m.SpIconExcludeOverlap as any),
  { ssr: false}
);
