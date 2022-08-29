import dynamic from 'next/dynamic';

import { IconViewColumn } from '@spectrum-web-components/icons-workflow/src/elements/IconViewColumn.js';

export const SpIconViewColumn = dynamic<IconViewColumn | { slot: string }>(
  () => import('./IconViewColumn').then((m) => m.SpIconViewColumn as any),
  { ssr: false }
);
