import dynamic from 'next/dynamic';

import { IconUsersExclude } from '@spectrum-web-components/icons-workflow/src/elements/IconUsersExclude.js';

export const SpIconUsersExclude = dynamic<IconUsersExclude | { slot: string }>(
  () => import('./IconUsersExclude').then((m) => m.SpIconUsersExclude as any),
  { ssr: false}
);
