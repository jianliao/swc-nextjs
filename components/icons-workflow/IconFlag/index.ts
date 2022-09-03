import dynamic from 'next/dynamic';

import { IconFlag } from '@spectrum-web-components/icons-workflow/src/elements/IconFlag.js';

export const SpIconFlag = dynamic<Partial<IconFlag> | { slot: string }>(
  () => import('./IconFlag').then((m) => m.SpIconFlag as any),
  { ssr: false}
);
