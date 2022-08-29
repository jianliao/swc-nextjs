import dynamic from 'next/dynamic';

import { IconInvertAdj } from '@spectrum-web-components/icons-workflow/src/elements/IconInvertAdj.js';

export const SpIconInvertAdj = dynamic<IconInvertAdj | { slot: string }>(
  () => import('./IconInvertAdj').then((m) => m.SpIconInvertAdj as any),
  { ssr: false }
);
