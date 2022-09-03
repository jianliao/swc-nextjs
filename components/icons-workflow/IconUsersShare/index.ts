import dynamic from 'next/dynamic';

import { IconUsersShare } from '@spectrum-web-components/icons-workflow/src/elements/IconUsersShare.js';

export const SpIconUsersShare = dynamic<Partial<IconUsersShare> | { slot: string }>(
  () => import('./IconUsersShare').then((m) => m.SpIconUsersShare as any),
  { ssr: false}
);
