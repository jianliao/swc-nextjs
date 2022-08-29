import dynamic from 'next/dynamic';

import { IconGlobeExit } from '@spectrum-web-components/icons-workflow/src/elements/IconGlobeExit.js';

export const SpIconGlobeExit = dynamic<IconGlobeExit | { slot: string }>(
  () => import('./IconGlobeExit').then((m) => m.SpIconGlobeExit as any),
  { ssr: false }
);
