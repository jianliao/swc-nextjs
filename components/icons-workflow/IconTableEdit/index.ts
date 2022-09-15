import dynamic from 'next/dynamic';

import { IconTableEdit } from '@spectrum-web-components/icons-workflow/src/elements/IconTableEdit.js';

export const SpIconTableEdit = dynamic<Partial<IconTableEdit> | { slot: string }>(
  () => import('./IconTableEdit').then((m) => m.SpIconTableEdit as any),
  { ssr: false }
);
