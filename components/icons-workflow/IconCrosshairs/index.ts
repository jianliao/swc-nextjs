import dynamic from 'next/dynamic';

import { IconCrosshairs } from '@spectrum-web-components/icons-workflow/src/elements/IconCrosshairs.js';

export const SpIconCrosshairs = dynamic<IconCrosshairs | { slot: string }>(
  () => import('./IconCrosshairs').then((m) => m.SpIconCrosshairs as any),
  { ssr: false}
);
