import dynamic from 'next/dynamic';

import { IconRail } from '@spectrum-web-components/icons-workflow/src/elements/IconRail.js';

export const SpIconRail = dynamic<IconRail | { slot: string }>(
  () => import('./IconRail').then((m) => m.SpIconRail as any),
  { ssr: false}
);
