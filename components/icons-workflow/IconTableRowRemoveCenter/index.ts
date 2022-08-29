import dynamic from 'next/dynamic';

import { IconTableRowRemoveCenter } from '@spectrum-web-components/icons-workflow/src/elements/IconTableRowRemoveCenter.js';

export const SpIconTableRowRemoveCenter = dynamic<IconTableRowRemoveCenter | { slot: string }>(
  () => import('./IconTableRowRemoveCenter').then((m) => m.SpIconTableRowRemoveCenter as any),
  { ssr: false }
);
