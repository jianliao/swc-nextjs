import dynamic from 'next/dynamic';

import { IconDragHandle } from '@spectrum-web-components/icons-workflow/src/elements/IconDragHandle.js';

export const SpIconDragHandle = dynamic<Partial<IconDragHandle> | { slot: string }>(
  () => import('./IconDragHandle').then((m) => m.SpIconDragHandle as any),
  { ssr: false}
);
