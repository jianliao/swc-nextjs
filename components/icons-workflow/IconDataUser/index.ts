import dynamic from 'next/dynamic';

import { IconDataUser } from '@spectrum-web-components/icons-workflow/src/elements/IconDataUser.js';

export const SpIconDataUser = dynamic<IconDataUser | { slot: string }>(
  () => import('./IconDataUser').then((m) => m.SpIconDataUser as any),
  { ssr: false}
);
