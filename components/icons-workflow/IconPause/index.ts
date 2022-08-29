import dynamic from 'next/dynamic';

import { IconPause } from '@spectrum-web-components/icons-workflow/src/elements/IconPause.js';

export const SpIconPause = dynamic<IconPause | { slot: string }>(
  () => import('./IconPause').then((m) => m.SpIconPause as any),
  { ssr: false }
);
