import dynamic from 'next/dynamic';

import { IconMoreVertical } from '@spectrum-web-components/icons-workflow/src/elements/IconMoreVertical.js';

export const SpIconMoreVertical = dynamic<IconMoreVertical | { slot: string }>(
  () => import('./IconMoreVertical').then((m) => m.SpIconMoreVertical as any),
  { ssr: false }
);
