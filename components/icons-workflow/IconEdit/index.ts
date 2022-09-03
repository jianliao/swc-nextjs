import dynamic from 'next/dynamic';

import { IconEdit } from '@spectrum-web-components/icons-workflow/src/elements/IconEdit.js';

export const SpIconEdit = dynamic<Partial<IconEdit> | { slot: string }>(
  () => import('./IconEdit').then((m) => m.SpIconEdit as any),
  { ssr: false}
);
