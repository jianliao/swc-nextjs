import dynamic from 'next/dynamic';

import { IconSortOrderDown } from '@spectrum-web-components/icons-workflow/src/elements/IconSortOrderDown.js';

export const SpIconSortOrderDown = dynamic<IconSortOrderDown | { slot: string }>(
  () => import('./IconSortOrderDown').then((m) => m.SpIconSortOrderDown as any),
  { ssr: false}
);
