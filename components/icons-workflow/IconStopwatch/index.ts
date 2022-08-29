import dynamic from 'next/dynamic';

import { IconStopwatch } from '@spectrum-web-components/icons-workflow/src/elements/IconStopwatch.js';

export const SpIconStopwatch = dynamic<IconStopwatch | { slot: string }>(
  () => import('./IconStopwatch').then((m) => m.SpIconStopwatch as any),
  { ssr: false }
);
