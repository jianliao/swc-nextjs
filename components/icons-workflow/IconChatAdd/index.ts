import dynamic from 'next/dynamic';

import { IconChatAdd } from '@spectrum-web-components/icons-workflow/src/elements/IconChatAdd.js';

export const SpIconChatAdd = dynamic<IconChatAdd | { slot: string }>(
  () => import('./IconChatAdd').then((m) => m.SpIconChatAdd as any),
  { ssr: false }
);
