import dynamic from 'next/dynamic';

import { IconTargeted } from '@spectrum-web-components/icons-workflow/src/elements/IconTargeted.js';

export const SpIconTargeted = dynamic<IconTargeted | { slot: string }>(
  () => import('./IconTargeted').then((m) => m.SpIconTargeted as any),
  { ssr: false }
);
