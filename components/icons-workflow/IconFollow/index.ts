import dynamic from 'next/dynamic';

import { IconFollow } from '@spectrum-web-components/icons-workflow/src/elements/IconFollow.js';

export const SpIconFollow = dynamic<Partial<IconFollow> | { slot: string }>(
  () => import('./IconFollow').then((m) => m.SpIconFollow as any),
  { ssr: false}
);
