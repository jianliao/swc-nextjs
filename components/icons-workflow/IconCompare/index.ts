import dynamic from 'next/dynamic';

import { IconCompare } from '@spectrum-web-components/icons-workflow/src/elements/IconCompare.js';

export const SpIconCompare = dynamic<Partial<IconCompare> | { slot: string }>(
  () => import('./IconCompare').then((m) => m.SpIconCompare as any),
  { ssr: false }
);
