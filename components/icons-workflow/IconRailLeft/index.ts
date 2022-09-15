import dynamic from 'next/dynamic';

import { IconRailLeft } from '@spectrum-web-components/icons-workflow/src/elements/IconRailLeft.js';

export const SpIconRailLeft = dynamic<Partial<IconRailLeft> | { slot: string }>(
  () => import('./IconRailLeft').then((m) => m.SpIconRailLeft as any),
  { ssr: false }
);
