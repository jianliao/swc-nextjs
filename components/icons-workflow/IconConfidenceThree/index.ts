import dynamic from 'next/dynamic';

import { IconConfidenceThree } from '@spectrum-web-components/icons-workflow/src/elements/IconConfidenceThree.js';

export const SpIconConfidenceThree = dynamic<IconConfidenceThree | { slot: string }>(
  () => import('./IconConfidenceThree').then((m) => m.SpIconConfidenceThree as any),
  { ssr: false }
);
