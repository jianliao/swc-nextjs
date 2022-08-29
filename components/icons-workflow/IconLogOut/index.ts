import dynamic from 'next/dynamic';

import { IconLogOut } from '@spectrum-web-components/icons-workflow/src/elements/IconLogOut.js';

export const SpIconLogOut = dynamic<IconLogOut | { slot: string }>(
  () => import('./IconLogOut').then((m) => m.SpIconLogOut as any),
  { ssr: false}
);
