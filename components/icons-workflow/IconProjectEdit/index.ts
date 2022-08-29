import dynamic from 'next/dynamic';

import { IconProjectEdit } from '@spectrum-web-components/icons-workflow/src/elements/IconProjectEdit.js';

export const SpIconProjectEdit = dynamic<IconProjectEdit | { slot: string }>(
  () => import('./IconProjectEdit').then((m) => m.SpIconProjectEdit as any),
  { ssr: false }
);
