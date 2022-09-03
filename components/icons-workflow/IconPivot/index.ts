import dynamic from 'next/dynamic';

import { IconPivot } from '@spectrum-web-components/icons-workflow/src/elements/IconPivot.js';

export const SpIconPivot = dynamic<Partial<IconPivot> | { slot: string }>(
  () => import('./IconPivot').then((m) => m.SpIconPivot as any),
  { ssr: false}
);
