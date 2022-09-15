import dynamic from 'next/dynamic';

import { IconAlertCircleFilled } from '@spectrum-web-components/icons-workflow/src/elements/IconAlertCircleFilled.js';

export const SpIconAlertCircleFilled = dynamic<Partial<IconAlertCircleFilled> | { slot: string }>(
  () => import('./IconAlertCircleFilled').then((m) => m.SpIconAlertCircleFilled as any),
  { ssr: false }
);
