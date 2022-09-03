import dynamic from 'next/dynamic';

import { IconRailRightOpen } from '@spectrum-web-components/icons-workflow/src/elements/IconRailRightOpen.js';

export const SpIconRailRightOpen = dynamic<Partial<IconRailRightOpen> | { slot: string }>(
  () => import('./IconRailRightOpen').then((m) => m.SpIconRailRightOpen as any),
  { ssr: false}
);
