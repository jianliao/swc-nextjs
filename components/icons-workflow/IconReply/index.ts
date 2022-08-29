import dynamic from 'next/dynamic';

import { IconReply } from '@spectrum-web-components/icons-workflow/src/elements/IconReply.js';

export const SpIconReply = dynamic<IconReply | { slot: string }>(
  () => import('./IconReply').then((m) => m.SpIconReply as any),
  { ssr: false}
);
