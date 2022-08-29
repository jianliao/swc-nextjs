import dynamic from 'next/dynamic';

import { IconCollectionEdit } from '@spectrum-web-components/icons-workflow/src/elements/IconCollectionEdit.js';

export const SpIconCollectionEdit = dynamic<IconCollectionEdit | { slot: string }>(
  () => import('./IconCollectionEdit').then((m) => m.SpIconCollectionEdit as any),
  { ssr: false }
);
