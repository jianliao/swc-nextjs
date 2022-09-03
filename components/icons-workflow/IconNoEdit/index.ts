import dynamic from 'next/dynamic';

import { IconNoEdit } from '@spectrum-web-components/icons-workflow/src/elements/IconNoEdit.js';

export const SpIconNoEdit = dynamic<Partial<IconNoEdit> | { slot: string }>(
  () => import('./IconNoEdit').then((m) => m.SpIconNoEdit as any),
  { ssr: false}
);
