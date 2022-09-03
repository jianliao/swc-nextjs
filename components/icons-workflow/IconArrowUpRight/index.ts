import dynamic from 'next/dynamic';

import { IconArrowUpRight } from '@spectrum-web-components/icons-workflow/src/elements/IconArrowUpRight.js';

export const SpIconArrowUpRight = dynamic<Partial<IconArrowUpRight> | { slot: string }>(
  () => import('./IconArrowUpRight').then((m) => m.SpIconArrowUpRight as any),
  { ssr: false}
);
