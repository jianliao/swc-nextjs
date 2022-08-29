import dynamic from 'next/dynamic';

import { IconCapitals } from '@spectrum-web-components/icons-workflow/src/elements/IconCapitals.js';

export const SpIconCapitals = dynamic<IconCapitals | { slot: string }>(
  () => import('./IconCapitals').then((m) => m.SpIconCapitals as any),
  { ssr: false}
);
