import dynamic from 'next/dynamic';

import { IconReorder } from '@spectrum-web-components/icons-workflow/src/elements/IconReorder.js';

export const SpIconReorder = dynamic<IconReorder | { slot: string }>(
  () => import('./IconReorder').then((m) => m.SpIconReorder as any),
  { ssr: false }
);
