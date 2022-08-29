import dynamic from 'next/dynamic';

import { IconMultiple } from '@spectrum-web-components/icons-workflow/src/elements/IconMultiple.js';

export const SpIconMultiple = dynamic<IconMultiple | { slot: string }>(
  () => import('./IconMultiple').then((m) => m.SpIconMultiple as any),
  { ssr: false }
);
