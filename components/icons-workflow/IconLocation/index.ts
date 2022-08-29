import dynamic from 'next/dynamic';

import { IconLocation } from '@spectrum-web-components/icons-workflow/src/elements/IconLocation.js';

export const SpIconLocation = dynamic<IconLocation | { slot: string }>(
  () => import('./IconLocation').then((m) => m.SpIconLocation as any),
  { ssr: false}
);
