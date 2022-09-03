import dynamic from 'next/dynamic';

import { IconArchiveRemove } from '@spectrum-web-components/icons-workflow/src/elements/IconArchiveRemove.js';

export const SpIconArchiveRemove = dynamic<Partial<IconArchiveRemove> | { slot: string }>(
  () => import('./IconArchiveRemove').then((m) => m.SpIconArchiveRemove as any),
  { ssr: false}
);
