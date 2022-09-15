import dynamic from 'next/dynamic';

import { IconDataRemove } from '@spectrum-web-components/icons-workflow/src/elements/IconDataRemove.js';

export const SpIconDataRemove = dynamic<Partial<IconDataRemove> | { slot: string }>(
  () => import('./IconDataRemove').then((m) => m.SpIconDataRemove as any),
  { ssr: false }
);
