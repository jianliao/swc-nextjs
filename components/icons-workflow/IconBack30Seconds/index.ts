import dynamic from 'next/dynamic';

import { IconBack30Seconds } from '@spectrum-web-components/icons-workflow/src/elements/IconBack30Seconds.js';

export const SpIconBack30Seconds = dynamic<IconBack30Seconds | { slot: string }>(
  () => import('./IconBack30Seconds').then((m) => m.SpIconBack30Seconds as any),
  { ssr: false }
);
