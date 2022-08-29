import dynamic from 'next/dynamic';

import { IconVolumeMute } from '@spectrum-web-components/icons-workflow/src/elements/IconVolumeMute.js';

export const SpIconVolumeMute = dynamic<IconVolumeMute | { slot: string }>(
  () => import('./IconVolumeMute').then((m) => m.SpIconVolumeMute as any),
  { ssr: false}
);
