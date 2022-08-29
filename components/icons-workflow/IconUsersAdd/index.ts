import dynamic from 'next/dynamic';

import { IconUsersAdd } from '@spectrum-web-components/icons-workflow/src/elements/IconUsersAdd.js';

export const SpIconUsersAdd = dynamic<IconUsersAdd | { slot: string }>(
  () => import('./IconUsersAdd').then((m) => m.SpIconUsersAdd as any),
  { ssr: false }
);
