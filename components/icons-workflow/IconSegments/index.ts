import dynamic from 'next/dynamic';

import { IconSegments } from '@spectrum-web-components/icons-workflow/src/elements/IconSegments.js';

export const SpIconSegments = dynamic<IconSegments | { slot: string }>(
  () => import('./IconSegments').then((m) => m.SpIconSegments as any),
  { ssr: false}
);
