import dynamic from 'next/dynamic';

import { IconTreeCollapseAll } from '@spectrum-web-components/icons-workflow/src/elements/IconTreeCollapseAll.js';

export const SpIconTreeCollapseAll = dynamic<IconTreeCollapseAll | { slot: string }>(
  () => import('./IconTreeCollapseAll').then((m) => m.SpIconTreeCollapseAll as any),
  { ssr: false }
);
