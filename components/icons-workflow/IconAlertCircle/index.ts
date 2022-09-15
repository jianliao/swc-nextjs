import dynamic from 'next/dynamic';

import { IconAlertCircle } from '@spectrum-web-components/icons-workflow/src/elements/IconAlertCircle.js';

export const SpIconAlertCircle = dynamic<Partial<IconAlertCircle> | { slot: string }>(
  () => import('./IconAlertCircle').then((m) => m.SpIconAlertCircle as any),
  { ssr: false }
);
