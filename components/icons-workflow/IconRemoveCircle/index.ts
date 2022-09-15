import dynamic from 'next/dynamic';

import { IconRemoveCircle } from '@spectrum-web-components/icons-workflow/src/elements/IconRemoveCircle.js';

export const SpIconRemoveCircle = dynamic<Partial<IconRemoveCircle> | { slot: string }>(
  () => import('./IconRemoveCircle').then((m) => m.SpIconRemoveCircle as any),
  { ssr: false }
);
