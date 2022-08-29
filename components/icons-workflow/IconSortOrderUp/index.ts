import dynamic from 'next/dynamic';

import { IconSortOrderUp } from '@spectrum-web-components/icons-workflow/src/elements/IconSortOrderUp.js';

export const SpIconSortOrderUp = dynamic<IconSortOrderUp | { slot: string }>(
  () => import('./IconSortOrderUp').then((m) => m.SpIconSortOrderUp as any),
  { ssr: false}
);
