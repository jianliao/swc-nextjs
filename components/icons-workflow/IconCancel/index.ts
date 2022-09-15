import dynamic from 'next/dynamic';

import { IconCancel } from '@spectrum-web-components/icons-workflow/src/elements/IconCancel.js';

export const SpIconCancel = dynamic<Partial<IconCancel> | { slot: string }>(
  () => import('./IconCancel').then((m) => m.SpIconCancel as any),
  { ssr: false }
);
