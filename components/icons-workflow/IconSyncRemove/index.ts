import dynamic from 'next/dynamic';

import { IconSyncRemove } from '@spectrum-web-components/icons-workflow/src/elements/IconSyncRemove.js';

export const SpIconSyncRemove = dynamic<Partial<IconSyncRemove> | { slot: string }>(
  () => import('./IconSyncRemove').then((m) => m.SpIconSyncRemove as any),
  { ssr: false}
);
