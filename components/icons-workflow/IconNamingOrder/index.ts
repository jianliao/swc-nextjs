import dynamic from 'next/dynamic';

import { IconNamingOrder } from '@spectrum-web-components/icons-workflow/src/elements/IconNamingOrder.js';

export const SpIconNamingOrder = dynamic<IconNamingOrder | { slot: string }>(
  () => import('./IconNamingOrder').then((m) => m.SpIconNamingOrder as any),
  { ssr: false}
);
