import dynamic from 'next/dynamic';

import { IconChevronLeft } from '@spectrum-web-components/icons-workflow/src/elements/IconChevronLeft.js';

export const SpIconChevronLeft = dynamic<Partial<IconChevronLeft> | { slot: string }>(
  () => import('./IconChevronLeft').then((m) => m.SpIconChevronLeft as any),
  { ssr: false }
);
