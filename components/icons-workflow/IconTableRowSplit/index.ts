import dynamic from 'next/dynamic';

import { IconTableRowSplit } from '@spectrum-web-components/icons-workflow/src/elements/IconTableRowSplit.js';

export const SpIconTableRowSplit = dynamic<IconTableRowSplit | { slot: string }>(
  () => import('./IconTableRowSplit').then((m) => m.SpIconTableRowSplit as any),
  { ssr: false}
);
