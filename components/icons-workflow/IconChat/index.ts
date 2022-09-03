import dynamic from 'next/dynamic';

import { IconChat } from '@spectrum-web-components/icons-workflow/src/elements/IconChat.js';

export const SpIconChat = dynamic<Partial<IconChat> | { slot: string }>(
  () => import('./IconChat').then((m) => m.SpIconChat as any),
  { ssr: false}
);
