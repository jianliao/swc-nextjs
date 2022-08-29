import dynamic from 'next/dynamic';

import { IconFileUser } from '@spectrum-web-components/icons-workflow/src/elements/IconFileUser.js';

export const SpIconFileUser = dynamic<IconFileUser | { slot: string }>(
  () => import('./IconFileUser').then((m) => m.SpIconFileUser as any),
  { ssr: false }
);
