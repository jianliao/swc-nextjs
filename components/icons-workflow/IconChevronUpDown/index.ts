import dynamic from 'next/dynamic';

import { IconChevronUpDown } from '@spectrum-web-components/icons-workflow/src/elements/IconChevronUpDown.js';

export const SpIconChevronUpDown = dynamic<Partial<IconChevronUpDown> | { slot: string }>(
  () => import('./IconChevronUpDown').then((m) => m.SpIconChevronUpDown as any),
  { ssr: false}
);
