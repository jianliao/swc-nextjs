import dynamic from 'next/dynamic';

import { IconAppRefresh } from '@spectrum-web-components/icons-workflow/src/elements/IconAppRefresh.js';

export const SpIconAppRefresh = dynamic<Partial<IconAppRefresh> | { slot: string }>(
  () => import('./IconAppRefresh').then((m) => m.SpIconAppRefresh as any),
  { ssr: false}
);
