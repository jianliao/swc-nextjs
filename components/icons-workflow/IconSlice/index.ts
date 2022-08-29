import dynamic from 'next/dynamic';

import { IconSlice } from '@spectrum-web-components/icons-workflow/src/elements/IconSlice.js';

export const SpIconSlice = dynamic<IconSlice | { slot: string }>(
  () => import('./IconSlice').then((m) => m.SpIconSlice as any),
  { ssr: false}
);
