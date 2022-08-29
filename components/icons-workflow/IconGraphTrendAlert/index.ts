import dynamic from 'next/dynamic';

import { IconGraphTrendAlert } from '@spectrum-web-components/icons-workflow/src/elements/IconGraphTrendAlert.js';

export const SpIconGraphTrendAlert = dynamic<IconGraphTrendAlert | { slot: string }>(
  () => import('./IconGraphTrendAlert').then((m) => m.SpIconGraphTrendAlert as any),
  { ssr: false }
);
