import dynamic from 'next/dynamic';

import { IconCollectionLink } from '@spectrum-web-components/icons-workflow/src/elements/IconCollectionLink.js';

export const SpIconCollectionLink = dynamic<IconCollectionLink | { slot: string }>(
  () => import('./IconCollectionLink').then((m) => m.SpIconCollectionLink as any),
  { ssr: false }
);
