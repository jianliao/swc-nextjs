import dynamic from 'next/dynamic';

import { IconLockClosed } from '@spectrum-web-components/icons-workflow/src/elements/IconLockClosed.js';

export const SpIconLockClosed = dynamic<Partial<IconLockClosed> | { slot: string }>(
  () => import('./IconLockClosed').then((m) => m.SpIconLockClosed as any),
  { ssr: false}
);
