import dynamic from 'next/dynamic';

import { IconTreeExpandAll } from '@spectrum-web-components/icons-workflow/src/elements/IconTreeExpandAll.js';

export const SpIconTreeExpandAll = dynamic<Partial<IconTreeExpandAll> | { slot: string }>(
  () => import('./IconTreeExpandAll').then((m) => m.SpIconTreeExpandAll as any),
  { ssr: false }
);
