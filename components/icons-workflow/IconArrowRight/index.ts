import dynamic from 'next/dynamic';

import { IconArrowRight } from '@spectrum-web-components/icons-workflow/src/elements/IconArrowRight.js';

export const SpIconArrowRight = dynamic<IconArrowRight | { slot: string }>(
  () => import('./IconArrowRight').then((m) => m.SpIconArrowRight as any),
  { ssr: false}
);
