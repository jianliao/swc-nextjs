import dynamic from 'next/dynamic';

import { IconPending } from '@spectrum-web-components/icons-workflow/src/elements/IconPending.js';

export const SpIconPending = dynamic<Partial<IconPending> | { slot: string }>(
  () => import('./IconPending').then((m) => m.SpIconPending as any),
  { ssr: false }
);
