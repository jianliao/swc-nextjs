import dynamic from 'next/dynamic';

import { IconDataRefresh } from '@spectrum-web-components/icons-workflow/src/elements/IconDataRefresh.js';

export const SpIconDataRefresh = dynamic<Partial<IconDataRefresh> | { slot: string }>(
  () => import('./IconDataRefresh').then((m) => m.SpIconDataRefresh as any),
  { ssr: false}
);
