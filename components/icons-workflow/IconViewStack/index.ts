import dynamic from 'next/dynamic';

import { IconViewStack } from '@spectrum-web-components/icons-workflow/src/elements/IconViewStack.js';

export const SpIconViewStack = dynamic<Partial<IconViewStack> | { slot: string }>(
  () => import('./IconViewStack').then((m) => m.SpIconViewStack as any),
  { ssr: false }
);
