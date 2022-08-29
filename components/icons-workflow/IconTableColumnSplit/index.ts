import dynamic from 'next/dynamic';

import { IconTableColumnSplit } from '@spectrum-web-components/icons-workflow/src/elements/IconTableColumnSplit.js';

export const SpIconTableColumnSplit = dynamic<IconTableColumnSplit | { slot: string }>(
  () => import('./IconTableColumnSplit').then((m) => m.SpIconTableColumnSplit as any),
  { ssr: false}
);
