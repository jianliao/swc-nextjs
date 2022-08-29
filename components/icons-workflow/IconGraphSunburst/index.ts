import dynamic from 'next/dynamic';

import { IconGraphSunburst } from '@spectrum-web-components/icons-workflow/src/elements/IconGraphSunburst.js';

export const SpIconGraphSunburst = dynamic<IconGraphSunburst | { slot: string }>(
  () => import('./IconGraphSunburst').then((m) => m.SpIconGraphSunburst as any),
  { ssr: false}
);
