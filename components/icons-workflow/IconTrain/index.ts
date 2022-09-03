import dynamic from 'next/dynamic';

import { IconTrain } from '@spectrum-web-components/icons-workflow/src/elements/IconTrain.js';

export const SpIconTrain = dynamic<Partial<IconTrain> | { slot: string }>(
  () => import('./IconTrain').then((m) => m.SpIconTrain as any),
  { ssr: false}
);
