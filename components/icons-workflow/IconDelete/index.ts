import dynamic from 'next/dynamic';

import { IconDelete } from '@spectrum-web-components/icons-workflow/src/elements/IconDelete.js';

export const SpIconDelete = dynamic<IconDelete | { slot: string }>(
  () => import('./IconDelete').then((m) => m.SpIconDelete as any),
  { ssr: false}
);
