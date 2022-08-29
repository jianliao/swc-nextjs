import dynamic from 'next/dynamic';

import { IconTestABEdit } from '@spectrum-web-components/icons-workflow/src/elements/IconTestABEdit.js';

export const SpIconTestABEdit = dynamic<IconTestABEdit | { slot: string }>(
  () => import('./IconTestABEdit').then((m) => m.SpIconTestABEdit as any),
  { ssr: false}
);
