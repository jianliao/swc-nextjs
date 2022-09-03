import dynamic from 'next/dynamic';

import { IconConfidenceTwo } from '@spectrum-web-components/icons-workflow/src/elements/IconConfidenceTwo.js';

export const SpIconConfidenceTwo = dynamic<Partial<IconConfidenceTwo> | { slot: string }>(
  () => import('./IconConfidenceTwo').then((m) => m.SpIconConfidenceTwo as any),
  { ssr: false}
);
