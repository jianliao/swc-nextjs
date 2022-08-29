import dynamic from 'next/dynamic';

import { IconProjectNameEdit } from '@spectrum-web-components/icons-workflow/src/elements/IconProjectNameEdit.js';

export const SpIconProjectNameEdit = dynamic<IconProjectNameEdit | { slot: string }>(
  () => import('./IconProjectNameEdit').then((m) => m.SpIconProjectNameEdit as any),
  { ssr: false}
);
