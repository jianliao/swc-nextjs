import dynamic from 'next/dynamic';

import { IconUserShare } from '@spectrum-web-components/icons-workflow/src/elements/IconUserShare.js';

export const SpIconUserShare = dynamic<IconUserShare | { slot: string }>(
  () => import('./IconUserShare').then((m) => m.SpIconUserShare as any),
  { ssr: false}
);
