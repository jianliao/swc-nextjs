import dynamic from 'next/dynamic';

import { IconSelectBoxAll } from '@spectrum-web-components/icons-workflow/src/elements/IconSelectBoxAll.js';

export const SpIconSelectBoxAll = dynamic<Partial<IconSelectBoxAll> | { slot: string }>(
  () => import('./IconSelectBoxAll').then((m) => m.SpIconSelectBoxAll as any),
  { ssr: false}
);
