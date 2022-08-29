import dynamic from 'next/dynamic';

import { IconInvite } from '@spectrum-web-components/icons-workflow/src/elements/IconInvite.js';

export const SpIconInvite = dynamic<IconInvite | { slot: string }>(
  () => import('./IconInvite').then((m) => m.SpIconInvite as any),
  { ssr: false}
);
