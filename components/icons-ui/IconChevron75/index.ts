import dynamic from 'next/dynamic';

import { IconChevron75 } from '@spectrum-web-components/icons-ui/src/elements/IconChevron75.js';

export const SpIconChevron75 = dynamic<IconChevron75 | { slot: string }>(
  () => import('./IconChevron75').then((m) => m.SpIconChevron75 as any),
  { ssr: false}
);
