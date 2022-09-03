import dynamic from 'next/dynamic';

import { IconChevron200 } from '@spectrum-web-components/icons-ui/src/elements/IconChevron200.js';

export const SpIconChevron200 = dynamic<Partial<IconChevron200> | { slot: string }>(
  () => import('./IconChevron200').then((m) => m.SpIconChevron200 as any),
  { ssr: false}
);
