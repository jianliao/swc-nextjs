import dynamic from 'next/dynamic';

import { IconConfidenceOne } from '@spectrum-web-components/icons-workflow/src/elements/IconConfidenceOne.js';

export const SpIconConfidenceOne = dynamic<IconConfidenceOne | { slot: string }>(
  () => import('./IconConfidenceOne').then((m) => m.SpIconConfidenceOne as any),
  { ssr: false }
);
