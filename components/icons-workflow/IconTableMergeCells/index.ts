import dynamic from 'next/dynamic';

import { IconTableMergeCells } from '@spectrum-web-components/icons-workflow/src/elements/IconTableMergeCells.js';

export const SpIconTableMergeCells = dynamic<IconTableMergeCells | { slot: string }>(
  () => import('./IconTableMergeCells').then((m) => m.SpIconTableMergeCells as any),
  { ssr: false}
);
