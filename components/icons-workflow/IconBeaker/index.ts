import dynamic from 'next/dynamic';

import { IconBeaker } from '@spectrum-web-components/icons-workflow/src/elements/IconBeaker.js';

export const SpIconBeaker = dynamic<IconBeaker | { slot: string }>(
  () => import('./IconBeaker').then((m) => m.SpIconBeaker as any),
  { ssr: false }
);
