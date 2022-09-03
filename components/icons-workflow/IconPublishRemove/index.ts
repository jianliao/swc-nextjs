import dynamic from 'next/dynamic';

import { IconPublishRemove } from '@spectrum-web-components/icons-workflow/src/elements/IconPublishRemove.js';

export const SpIconPublishRemove = dynamic<Partial<IconPublishRemove> | { slot: string }>(
  () => import('./IconPublishRemove').then((m) => m.SpIconPublishRemove as any),
  { ssr: false}
);
