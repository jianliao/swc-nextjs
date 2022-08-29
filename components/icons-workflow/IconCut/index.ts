import dynamic from 'next/dynamic';

import { IconCut } from '@spectrum-web-components/icons-workflow/src/elements/IconCut.js';

export const SpIconCut = dynamic<IconCut | { slot: string }>(
  () => import('./IconCut').then((m) => m.SpIconCut as any),
  { ssr: false }
);
