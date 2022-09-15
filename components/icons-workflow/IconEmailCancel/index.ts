import dynamic from 'next/dynamic';

import { IconEmailCancel } from '@spectrum-web-components/icons-workflow/src/elements/IconEmailCancel.js';

export const SpIconEmailCancel = dynamic<Partial<IconEmailCancel> | { slot: string }>(
  () => import('./IconEmailCancel').then((m) => m.SpIconEmailCancel as any),
  { ssr: false }
);
