import dynamic from 'next/dynamic';

import { IconUsersLock } from '@spectrum-web-components/icons-workflow/src/elements/IconUsersLock.js';

export const SpIconUsersLock = dynamic<Partial<IconUsersLock> | { slot: string }>(
  () => import('./IconUsersLock').then((m) => m.SpIconUsersLock as any),
  { ssr: false }
);
