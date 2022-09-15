import dynamic from 'next/dynamic';

import { IconAutomatedSegment } from '@spectrum-web-components/icons-workflow/src/elements/IconAutomatedSegment.js';

export const SpIconAutomatedSegment = dynamic<Partial<IconAutomatedSegment> | { slot: string }>(
  () => import('./IconAutomatedSegment').then((m) => m.SpIconAutomatedSegment as any),
  { ssr: false }
);
