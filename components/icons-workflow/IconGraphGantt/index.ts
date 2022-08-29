import dynamic from 'next/dynamic';

import { IconGraphGantt } from '@spectrum-web-components/icons-workflow/src/elements/IconGraphGantt.js';

export const SpIconGraphGantt = dynamic<IconGraphGantt | { slot: string }>(
  () => import('./IconGraphGantt').then((m) => m.SpIconGraphGantt as any),
  { ssr: false}
);
