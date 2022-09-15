import dynamic from 'next/dynamic';

import { IconUserEdit } from '@spectrum-web-components/icons-workflow/src/elements/IconUserEdit.js';

export const SpIconUserEdit = dynamic<Partial<IconUserEdit> | { slot: string }>(
  () => import('./IconUserEdit').then((m) => m.SpIconUserEdit as any),
  { ssr: false }
);
