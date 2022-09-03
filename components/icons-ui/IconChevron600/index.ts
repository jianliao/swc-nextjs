import dynamic from 'next/dynamic';

import { IconChevron600 } from '@spectrum-web-components/icons-ui/src/elements/IconChevron600.js';

export const SpIconChevron600 = dynamic<Partial<IconChevron600> | { slot: string }>(
  () => import('./IconChevron600').then((m) => m.SpIconChevron600 as any),
  { ssr: false}
);
