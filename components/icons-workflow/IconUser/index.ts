import dynamic from 'next/dynamic';

import { IconUser } from '@spectrum-web-components/icons-workflow/src/elements/IconUser.js';

export const SpIconUser = dynamic<IconUser | { slot: string }>(
  () => import('./IconUser').then((m) => m.SpIconUser as any),
  { ssr: false }
);
