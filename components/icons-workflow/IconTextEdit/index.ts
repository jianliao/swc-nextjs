import dynamic from 'next/dynamic';

import { IconTextEdit } from '@spectrum-web-components/icons-workflow/src/elements/IconTextEdit.js';

export const SpIconTextEdit = dynamic<IconTextEdit | { slot: string }>(
  () => import('./IconTextEdit').then((m) => m.SpIconTextEdit as any),
  { ssr: false}
);
