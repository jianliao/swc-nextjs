import dynamic from 'next/dynamic';

import { IconTreeExpand } from '@spectrum-web-components/icons-workflow/src/elements/IconTreeExpand.js';

export const SpIconTreeExpand = dynamic<IconTreeExpand | { slot: string }>(
  () => import('./IconTreeExpand').then((m) => m.SpIconTreeExpand as any),
  { ssr: false}
);
