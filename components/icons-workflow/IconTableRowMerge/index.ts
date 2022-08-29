import dynamic from 'next/dynamic';

import { IconTableRowMerge } from '@spectrum-web-components/icons-workflow/src/elements/IconTableRowMerge.js';

export const SpIconTableRowMerge = dynamic<IconTableRowMerge | { slot: string }>(
  () => import('./IconTableRowMerge').then((m) => m.SpIconTableRowMerge as any),
  { ssr: false }
);
