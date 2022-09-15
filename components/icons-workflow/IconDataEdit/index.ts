import dynamic from 'next/dynamic';

import { IconDataEdit } from '@spectrum-web-components/icons-workflow/src/elements/IconDataEdit.js';

export const SpIconDataEdit = dynamic<Partial<IconDataEdit> | { slot: string }>(
  () => import('./IconDataEdit').then((m) => m.SpIconDataEdit as any),
  { ssr: false }
);
