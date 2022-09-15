import dynamic from 'next/dynamic';

import { IconChevronDoubleLeft } from '@spectrum-web-components/icons-workflow/src/elements/IconChevronDoubleLeft.js';

export const SpIconChevronDoubleLeft = dynamic<Partial<IconChevronDoubleLeft> | { slot: string }>(
  () => import('./IconChevronDoubleLeft').then((m) => m.SpIconChevronDoubleLeft as any),
  { ssr: false }
);
