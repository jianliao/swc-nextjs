import dynamic from 'next/dynamic';

import { IconLockOpen } from '@spectrum-web-components/icons-workflow/src/elements/IconLockOpen.js';

export const SpIconLockOpen = dynamic<Partial<IconLockOpen> | { slot: string }>(
  () => import('./IconLockOpen').then((m) => m.SpIconLockOpen as any),
  { ssr: false}
);
