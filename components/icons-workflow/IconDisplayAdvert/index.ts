import dynamic from 'next/dynamic';

import { IconDisplayAdvert } from '@spectrum-web-components/icons-workflow/src/elements/IconDisplayAdvert.js';

export const SpIconDisplayAdvert = dynamic<IconDisplayAdvert | { slot: string }>(
  () => import('./IconDisplayAdvert').then((m) => m.SpIconDisplayAdvert as any),
  { ssr: false }
);
