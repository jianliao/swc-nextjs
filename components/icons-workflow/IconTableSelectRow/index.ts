import dynamic from 'next/dynamic';

import { IconTableSelectRow } from '@spectrum-web-components/icons-workflow/src/elements/IconTableSelectRow.js';

export const SpIconTableSelectRow = dynamic<Partial<IconTableSelectRow> | { slot: string }>(
  () => import('./IconTableSelectRow').then((m) => m.SpIconTableSelectRow as any),
  { ssr: false }
);
