import dynamic from 'next/dynamic';

import { IconRailBottom } from '@spectrum-web-components/icons-workflow/src/elements/IconRailBottom.js';

export const SpIconRailBottom = dynamic<IconRailBottom | { slot: string }>(
  () => import('./IconRailBottom').then((m) => m.SpIconRailBottom as any),
  { ssr: false }
);
