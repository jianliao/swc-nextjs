import dynamic from 'next/dynamic';

import { IconArrowUp } from '@spectrum-web-components/icons-workflow/src/elements/IconArrowUp.js';

export const SpIconArrowUp = dynamic<IconArrowUp | { slot: string }>(
  () => import('./IconArrowUp').then((m) => m.SpIconArrowUp as any),
  { ssr: false }
);
