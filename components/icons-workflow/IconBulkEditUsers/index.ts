import dynamic from 'next/dynamic';

import { IconBulkEditUsers } from '@spectrum-web-components/icons-workflow/src/elements/IconBulkEditUsers.js';

export const SpIconBulkEditUsers = dynamic<Partial<IconBulkEditUsers> | { slot: string }>(
  () => import('./IconBulkEditUsers').then((m) => m.SpIconBulkEditUsers as any),
  { ssr: false }
);
