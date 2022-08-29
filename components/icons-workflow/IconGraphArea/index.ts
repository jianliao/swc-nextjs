import dynamic from 'next/dynamic';

import { IconGraphArea } from '@spectrum-web-components/icons-workflow/src/elements/IconGraphArea.js';

export const SpIconGraphArea = dynamic<IconGraphArea | { slot: string }>(
  () => import('./IconGraphArea').then((m) => m.SpIconGraphArea as any),
  { ssr: false}
);
