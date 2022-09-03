import dynamic from 'next/dynamic';

import { IconPushNotification } from '@spectrum-web-components/icons-workflow/src/elements/IconPushNotification.js';

export const SpIconPushNotification = dynamic<Partial<IconPushNotification> | { slot: string }>(
  () => import('./IconPushNotification').then((m) => m.SpIconPushNotification as any),
  { ssr: false}
);
