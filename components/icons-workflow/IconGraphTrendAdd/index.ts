import dynamic from 'next/dynamic';

import { IconGraphTrendAdd } from '@spectrum-web-components/icons-workflow/src/elements/IconGraphTrendAdd.js';

export const SpIconGraphTrendAdd = dynamic<Partial<IconGraphTrendAdd> | { slot: string }>(
  () => import('./IconGraphTrendAdd').then((m) => m.SpIconGraphTrendAdd as any),
  { ssr: false }
);
