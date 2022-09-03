import dynamic from 'next/dynamic';

import { IconTable } from '@spectrum-web-components/icons-workflow/src/elements/IconTable.js';

export const SpIconTable = dynamic<Partial<IconTable> | { slot: string }>(
  () => import('./IconTable').then((m) => m.SpIconTable as any),
  { ssr: false}
);
