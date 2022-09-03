import dynamic from 'next/dynamic';

import { IconAlert } from '@spectrum-web-components/icons-workflow/src/elements/IconAlert.js';

export const SpIconAlert = dynamic<Partial<IconAlert> | { slot: string }>(
  () => import('./IconAlert').then((m) => m.SpIconAlert as any),
  { ssr: false}
);
