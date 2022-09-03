import dynamic from 'next/dynamic';

import { IconCollectionCheck } from '@spectrum-web-components/icons-workflow/src/elements/IconCollectionCheck.js';

export const SpIconCollectionCheck = dynamic<Partial<IconCollectionCheck> | { slot: string }>(
  () => import('./IconCollectionCheck').then((m) => m.SpIconCollectionCheck as any),
  { ssr: false}
);
