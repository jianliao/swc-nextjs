import dynamic from 'next/dynamic';

import { IconAlertAdd } from '@spectrum-web-components/icons-workflow/src/elements/IconAlertAdd.js';

export const SpIconAlertAdd = dynamic<IconAlertAdd | { slot: string }>(
  () => import('./IconAlertAdd').then((m) => m.SpIconAlertAdd as any),
  { ssr: false}
);
