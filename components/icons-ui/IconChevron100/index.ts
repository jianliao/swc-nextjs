import dynamic from 'next/dynamic';

import { IconChevron100 } from '@spectrum-web-components/icons-ui/src/elements/IconChevron100.js';

export const SpIconChevron100 = dynamic<Partial<IconChevron100> | { slot: string }>(
  () => import('./IconChevron100').then((m) => m.SpIconChevron100 as any),
  { ssr: false }
);
