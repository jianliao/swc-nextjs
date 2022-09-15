import dynamic from 'next/dynamic';

import { IconRailRight } from '@spectrum-web-components/icons-workflow/src/elements/IconRailRight.js';

export const SpIconRailRight = dynamic<Partial<IconRailRight> | { slot: string }>(
  () => import('./IconRailRight').then((m) => m.SpIconRailRight as any),
  { ssr: false }
);
