import dynamic from 'next/dynamic';

import { IconTableSelectColumn } from '@spectrum-web-components/icons-workflow/src/elements/IconTableSelectColumn.js';

export const SpIconTableSelectColumn = dynamic<IconTableSelectColumn | { slot: string }>(
  () => import('./IconTableSelectColumn').then((m) => m.SpIconTableSelectColumn as any),
  { ssr: false }
);
