import dynamic from 'next/dynamic';

import { IconTextKerning } from '@spectrum-web-components/icons-workflow/src/elements/IconTextKerning.js';

export const SpIconTextKerning = dynamic<IconTextKerning | { slot: string }>(
  () => import('./IconTextKerning').then((m) => m.SpIconTextKerning as any),
  { ssr: false }
);
