import dynamic from 'next/dynamic';

import { IconViewRow } from '@spectrum-web-components/icons-workflow/src/elements/IconViewRow.js';

export const SpIconViewRow = dynamic<Partial<IconViewRow> | { slot: string }>(
  () => import('./IconViewRow').then((m) => m.SpIconViewRow as any),
  { ssr: false }
);
