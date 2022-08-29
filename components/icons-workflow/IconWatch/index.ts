import dynamic from 'next/dynamic';

import { IconWatch } from '@spectrum-web-components/icons-workflow/src/elements/IconWatch.js';

export const SpIconWatch = dynamic<IconWatch | { slot: string }>(
  () => import('./IconWatch').then((m) => m.SpIconWatch as any),
  { ssr: false }
);
