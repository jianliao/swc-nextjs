import dynamic from 'next/dynamic';

import { IconGraphStreamRankedAdd } from '@spectrum-web-components/icons-workflow/src/elements/IconGraphStreamRankedAdd.js';

export const SpIconGraphStreamRankedAdd = dynamic<IconGraphStreamRankedAdd | { slot: string }>(
  () => import('./IconGraphStreamRankedAdd').then((m) => m.SpIconGraphStreamRankedAdd as any),
  { ssr: false }
);
