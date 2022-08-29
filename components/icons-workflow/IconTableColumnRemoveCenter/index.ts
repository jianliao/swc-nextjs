import dynamic from 'next/dynamic';

import { IconTableColumnRemoveCenter } from '@spectrum-web-components/icons-workflow/src/elements/IconTableColumnRemoveCenter.js';

export const SpIconTableColumnRemoveCenter = dynamic<IconTableColumnRemoveCenter | { slot: string }>(
  () => import('./IconTableColumnRemoveCenter').then((m) => m.SpIconTableColumnRemoveCenter as any),
  { ssr: false}
);
