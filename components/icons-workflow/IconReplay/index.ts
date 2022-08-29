import dynamic from 'next/dynamic';

import { IconReplay } from '@spectrum-web-components/icons-workflow/src/elements/IconReplay.js';

export const SpIconReplay = dynamic<IconReplay | { slot: string }>(
  () => import('./IconReplay').then((m) => m.SpIconReplay as any),
  { ssr: false }
);
