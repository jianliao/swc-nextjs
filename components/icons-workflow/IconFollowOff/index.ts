import dynamic from 'next/dynamic';

import { IconFollowOff } from '@spectrum-web-components/icons-workflow/src/elements/IconFollowOff.js';

export const SpIconFollowOff = dynamic<IconFollowOff | { slot: string }>(
  () => import('./IconFollowOff').then((m) => m.SpIconFollowOff as any),
  { ssr: false}
);
