import dynamic from 'next/dynamic';

import { IconFileKey } from '@spectrum-web-components/icons-workflow/src/elements/IconFileKey.js';

export const SpIconFileKey = dynamic<IconFileKey | { slot: string }>(
  () => import('./IconFileKey').then((m) => m.SpIconFileKey as any),
  { ssr: false}
);
