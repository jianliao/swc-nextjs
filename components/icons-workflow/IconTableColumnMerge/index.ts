import dynamic from 'next/dynamic';

import { IconTableColumnMerge } from '@spectrum-web-components/icons-workflow/src/elements/IconTableColumnMerge.js';

export const SpIconTableColumnMerge = dynamic<IconTableColumnMerge | { slot: string }>(
  () => import('./IconTableColumnMerge').then((m) => m.SpIconTableColumnMerge as any),
  { ssr: false}
);
