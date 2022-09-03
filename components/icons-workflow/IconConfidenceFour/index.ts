import dynamic from 'next/dynamic';

import { IconConfidenceFour } from '@spectrum-web-components/icons-workflow/src/elements/IconConfidenceFour.js';

export const SpIconConfidenceFour = dynamic<Partial<IconConfidenceFour> | { slot: string }>(
  () => import('./IconConfidenceFour').then((m) => m.SpIconConfidenceFour as any),
  { ssr: false}
);
