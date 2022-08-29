import dynamic from 'next/dynamic';

import { IconPageShare } from '@spectrum-web-components/icons-workflow/src/elements/IconPageShare.js';

export const SpIconPageShare = dynamic<IconPageShare | { slot: string }>(
  () => import('./IconPageShare').then((m) => m.SpIconPageShare as any),
  { ssr: false }
);
