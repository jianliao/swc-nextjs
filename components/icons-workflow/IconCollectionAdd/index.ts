import dynamic from 'next/dynamic';

import { IconCollectionAdd } from '@spectrum-web-components/icons-workflow/src/elements/IconCollectionAdd.js';

export const SpIconCollectionAdd = dynamic<IconCollectionAdd | { slot: string }>(
  () => import('./IconCollectionAdd').then((m) => m.SpIconCollectionAdd as any),
  { ssr: false}
);
