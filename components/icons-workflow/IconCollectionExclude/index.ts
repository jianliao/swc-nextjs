import dynamic from 'next/dynamic';

import { IconCollectionExclude } from '@spectrum-web-components/icons-workflow/src/elements/IconCollectionExclude.js';

export const SpIconCollectionExclude = dynamic<IconCollectionExclude | { slot: string }>(
  () => import('./IconCollectionExclude').then((m) => m.SpIconCollectionExclude as any),
  { ssr: false }
);
