import dynamic from 'next/dynamic';

import { IconEmailNotification } from '@spectrum-web-components/icons-workflow/src/elements/IconEmailNotification.js';

export const SpIconEmailNotification = dynamic<IconEmailNotification | { slot: string }>(
  () => import('./IconEmailNotification').then((m) => m.SpIconEmailNotification as any),
  { ssr: false }
);
