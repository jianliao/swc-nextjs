import dynamic from 'next/dynamic';

import { IconChevron500 } from '@spectrum-web-components/icons-ui/src/elements/IconChevron500.js';

export const SpIconChevron500 = dynamic<IconChevron500 | { slot: string }>(
  () => import('./IconChevron500').then((m) => m.SpIconChevron500 as any),
  { ssr: false }
);
