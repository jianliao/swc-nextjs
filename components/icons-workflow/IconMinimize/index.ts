import dynamic from 'next/dynamic';

import { IconMinimize } from '@spectrum-web-components/icons-workflow/src/elements/IconMinimize.js';

export const SpIconMinimize = dynamic<IconMinimize | { slot: string }>(
  () => import('./IconMinimize').then((m) => m.SpIconMinimize as any),
  { ssr: false }
);
