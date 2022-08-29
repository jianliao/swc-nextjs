import dynamic from 'next/dynamic';

import { IconLaunch } from '@spectrum-web-components/icons-workflow/src/elements/IconLaunch.js';

export const SpIconLaunch = dynamic<IconLaunch | { slot: string }>(
  () => import('./IconLaunch').then((m) => m.SpIconLaunch as any),
  { ssr: false}
);
