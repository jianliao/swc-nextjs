import dynamic from 'next/dynamic';

import { IconChevronUp } from '@spectrum-web-components/icons-workflow/src/elements/IconChevronUp.js';

export const SpIconChevronUp = dynamic<IconChevronUp | { slot: string }>(
  () => import('./IconChevronUp').then((m) => m.SpIconChevronUp as any),
  { ssr: false}
);
