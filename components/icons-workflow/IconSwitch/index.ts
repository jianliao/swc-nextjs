import dynamic from 'next/dynamic';

import { IconSwitch } from '@spectrum-web-components/icons-workflow/src/elements/IconSwitch.js';

export const SpIconSwitch = dynamic<Partial<IconSwitch> | { slot: string }>(
  () => import('./IconSwitch').then((m) => m.SpIconSwitch as any),
  { ssr: false }
);
