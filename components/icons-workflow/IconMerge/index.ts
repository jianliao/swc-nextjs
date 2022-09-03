import dynamic from 'next/dynamic';

import { IconMerge } from '@spectrum-web-components/icons-workflow/src/elements/IconMerge.js';

export const SpIconMerge = dynamic<Partial<IconMerge> | { slot: string }>(
  () => import('./IconMerge').then((m) => m.SpIconMerge as any),
  { ssr: false}
);
