import dynamic from 'next/dynamic';

import { IconPageBreak } from '@spectrum-web-components/icons-workflow/src/elements/IconPageBreak.js';

export const SpIconPageBreak = dynamic<Partial<IconPageBreak> | { slot: string }>(
  () => import('./IconPageBreak').then((m) => m.SpIconPageBreak as any),
  { ssr: false}
);
