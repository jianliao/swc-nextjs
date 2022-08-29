import dynamic from 'next/dynamic';

import { IconApplicationDelivery } from '@spectrum-web-components/icons-workflow/src/elements/IconApplicationDelivery.js';

export const SpIconApplicationDelivery = dynamic<IconApplicationDelivery | { slot: string }>(
  () => import('./IconApplicationDelivery').then((m) => m.SpIconApplicationDelivery as any),
  { ssr: false}
);
