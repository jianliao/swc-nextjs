import dynamic from 'next/dynamic';

import { IconFilterEdit } from '@spectrum-web-components/icons-workflow/src/elements/IconFilterEdit.js';

export const SpIconFilterEdit = dynamic<Partial<IconFilterEdit> | { slot: string }>(
  () => import('./IconFilterEdit').then((m) => m.SpIconFilterEdit as any),
  { ssr: false}
);
