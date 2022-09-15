import dynamic from 'next/dynamic';

import { IconLinkUser } from '@spectrum-web-components/icons-workflow/src/elements/IconLinkUser.js';

export const SpIconLinkUser = dynamic<Partial<IconLinkUser> | { slot: string }>(
  () => import('./IconLinkUser').then((m) => m.SpIconLinkUser as any),
  { ssr: false }
);
