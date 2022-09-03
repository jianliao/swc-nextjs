import dynamic from 'next/dynamic';

import { IconRealTimeCustomerProfile } from '@spectrum-web-components/icons-workflow/src/elements/IconRealTimeCustomerProfile.js';

export const SpIconRealTimeCustomerProfile = dynamic<Partial<IconRealTimeCustomerProfile> | { slot: string }>(
  () => import('./IconRealTimeCustomerProfile').then((m) => m.SpIconRealTimeCustomerProfile as any),
  { ssr: false}
);
