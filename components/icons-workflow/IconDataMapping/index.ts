import dynamic from 'next/dynamic';

import { IconDataMapping } from '@spectrum-web-components/icons-workflow/src/elements/IconDataMapping.js';

export const SpIconDataMapping = dynamic<IconDataMapping | { slot: string }>(
  () => import('./IconDataMapping').then((m) => m.SpIconDataMapping as any),
  { ssr: false }
);
