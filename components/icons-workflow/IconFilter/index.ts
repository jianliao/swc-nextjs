import dynamic from 'next/dynamic';

import { IconFilter } from '@spectrum-web-components/icons-workflow/src/elements/IconFilter.js';

export const SpIconFilter = dynamic<Partial<IconFilter> | { slot: string }>(
  () => import('./IconFilter').then((m) => m.SpIconFilter as any),
  { ssr: false }
);
