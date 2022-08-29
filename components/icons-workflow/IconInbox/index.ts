import dynamic from 'next/dynamic';

import { IconInbox } from '@spectrum-web-components/icons-workflow/src/elements/IconInbox.js';

export const SpIconInbox = dynamic<IconInbox | { slot: string }>(
  () => import('./IconInbox').then((m) => m.SpIconInbox as any),
  { ssr: false}
);
