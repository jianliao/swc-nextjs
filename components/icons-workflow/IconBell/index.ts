import dynamic from 'next/dynamic';

import { IconBell } from '@spectrum-web-components/icons-workflow/src/elements/IconBell.js';

export const SpIconBell = dynamic<IconBell | { slot: string }>(
  () => import('./IconBell').then((m) => m.SpIconBell as any),
  { ssr: false}
);
