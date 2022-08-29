import dynamic from 'next/dynamic';

import { IconChevronDoubleRight } from '@spectrum-web-components/icons-workflow/src/elements/IconChevronDoubleRight.js';

export const SpIconChevronDoubleRight = dynamic<IconChevronDoubleRight | { slot: string }>(
  () => import('./IconChevronDoubleRight').then((m) => m.SpIconChevronDoubleRight as any),
  { ssr: false}
);
