import dynamic from 'next/dynamic';

import { IconSMSRefresh } from '@spectrum-web-components/icons-workflow/src/elements/IconSMSRefresh.js';

export const SpIconSMSRefresh = dynamic<Partial<IconSMSRefresh> | { slot: string }>(
  () => import('./IconSMSRefresh').then((m) => m.SpIconSMSRefresh as any),
  { ssr: false}
);
