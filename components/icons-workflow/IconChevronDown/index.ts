import dynamic from 'next/dynamic';

import { IconChevronDown } from '@spectrum-web-components/icons-workflow/src/elements/IconChevronDown.js';

export const SpIconChevronDown = dynamic<IconChevronDown | { slot: string }>(
  () => import('./IconChevronDown').then((m) => m.SpIconChevronDown as any),
  { ssr: false}
);
