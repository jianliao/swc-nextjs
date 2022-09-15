import dynamic from 'next/dynamic';

import { IconPublishPending } from '@spectrum-web-components/icons-workflow/src/elements/IconPublishPending.js';

export const SpIconPublishPending = dynamic<Partial<IconPublishPending> | { slot: string }>(
  () => import('./IconPublishPending').then((m) => m.SpIconPublishPending as any),
  { ssr: false }
);
