import dynamic from 'next/dynamic';

import { IconChevronRight } from '@spectrum-web-components/icons-workflow/src/elements/IconChevronRight.js';

export const SpIconChevronRight = dynamic<Partial<IconChevronRight> | { slot: string }>(
  () => import('./IconChevronRight').then((m) => m.SpIconChevronRight as any),
  { ssr: false }
);
