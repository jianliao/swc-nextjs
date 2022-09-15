import dynamic from 'next/dynamic';

import { IconChevron400 } from '@spectrum-web-components/icons-ui/src/elements/IconChevron400.js';

export const SpIconChevron400 = dynamic<Partial<IconChevron400> | { slot: string }>(
  () => import('./IconChevron400').then((m) => m.SpIconChevron400 as any),
  { ssr: false }
);
