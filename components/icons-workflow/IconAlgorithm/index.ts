import dynamic from 'next/dynamic';

import { IconAlgorithm } from '@spectrum-web-components/icons-workflow/src/elements/IconAlgorithm.js';

export const SpIconAlgorithm = dynamic<Partial<IconAlgorithm> | { slot: string }>(
  () => import('./IconAlgorithm').then((m) => m.SpIconAlgorithm as any),
  { ssr: false }
);
