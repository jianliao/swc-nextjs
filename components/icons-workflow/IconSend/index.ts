import dynamic from 'next/dynamic';

import { IconSend } from '@spectrum-web-components/icons-workflow/src/elements/IconSend.js';

export const SpIconSend = dynamic<Partial<IconSend> | { slot: string }>(
  () => import('./IconSend').then((m) => m.SpIconSend as any),
  { ssr: false}
);
