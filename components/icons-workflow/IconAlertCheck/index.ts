import dynamic from 'next/dynamic';

import { IconAlertCheck } from '@spectrum-web-components/icons-workflow/src/elements/IconAlertCheck.js';

export const SpIconAlertCheck = dynamic<Partial<IconAlertCheck> | { slot: string }>(
  () => import('./IconAlertCheck').then((m) => m.SpIconAlertCheck as any),
  { ssr: false }
);
