import dynamic from 'next/dynamic';

import { IconChannel } from '@spectrum-web-components/icons-workflow/src/elements/IconChannel.js';

export const SpIconChannel = dynamic<IconChannel | { slot: string }>(
  () => import('./IconChannel').then((m) => m.SpIconChannel as any),
  { ssr: false }
);
