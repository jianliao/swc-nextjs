import dynamic from 'next/dynamic';

import { IconSync } from '@spectrum-web-components/icons-workflow/src/elements/IconSync.js';

export const SpIconSync = dynamic<IconSync | { slot: string }>(
  () => import('./IconSync').then((m) => m.SpIconSync as any),
  { ssr: false }
);
