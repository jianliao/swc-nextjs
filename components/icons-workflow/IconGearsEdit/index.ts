import dynamic from 'next/dynamic';

import { IconGearsEdit } from '@spectrum-web-components/icons-workflow/src/elements/IconGearsEdit.js';

export const SpIconGearsEdit = dynamic<IconGearsEdit | { slot: string }>(
  () => import('./IconGearsEdit').then((m) => m.SpIconGearsEdit as any),
  { ssr: false}
);
