import dynamic from 'next/dynamic';

import { IconCollectionAddTo } from '@spectrum-web-components/icons-workflow/src/elements/IconCollectionAddTo.js';

export const SpIconCollectionAddTo = dynamic<IconCollectionAddTo | { slot: string }>(
  () => import('./IconCollectionAddTo').then((m) => m.SpIconCollectionAddTo as any),
  { ssr: false}
);
