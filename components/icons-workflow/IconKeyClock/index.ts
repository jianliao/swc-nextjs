import dynamic from 'next/dynamic';

import { IconKeyClock } from '@spectrum-web-components/icons-workflow/src/elements/IconKeyClock.js';

export const SpIconKeyClock = dynamic<Partial<IconKeyClock> | { slot: string }>(
  () => import('./IconKeyClock').then((m) => m.SpIconKeyClock as any),
  { ssr: false}
);
