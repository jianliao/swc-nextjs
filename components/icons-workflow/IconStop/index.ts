import dynamic from 'next/dynamic';

import { IconStop } from '@spectrum-web-components/icons-workflow/src/elements/IconStop.js';

export const SpIconStop = dynamic<Partial<IconStop> | { slot: string }>(
  () => import('./IconStop').then((m) => m.SpIconStop as any),
  { ssr: false}
);
