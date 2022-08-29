import dynamic from 'next/dynamic';

import { IconRefresh } from '@spectrum-web-components/icons-workflow/src/elements/IconRefresh.js';

export const SpIconRefresh = dynamic<IconRefresh | { slot: string }>(
  () => import('./IconRefresh').then((m) => m.SpIconRefresh as any),
  { ssr: false }
);
