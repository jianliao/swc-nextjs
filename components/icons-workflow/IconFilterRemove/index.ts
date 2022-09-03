import dynamic from 'next/dynamic';

import { IconFilterRemove } from '@spectrum-web-components/icons-workflow/src/elements/IconFilterRemove.js';

export const SpIconFilterRemove = dynamic<Partial<IconFilterRemove> | { slot: string }>(
  () => import('./IconFilterRemove').then((m) => m.SpIconFilterRemove as any),
  { ssr: false}
);
