import dynamic from 'next/dynamic';

import { IconChevron300 } from '@spectrum-web-components/icons-ui/src/elements/IconChevron300.js';

export const SpIconChevron300 = dynamic<Partial<IconChevron300> | { slot: string }>(
  () => import('./IconChevron300').then((m) => m.SpIconChevron300 as any),
  { ssr: false }
);
