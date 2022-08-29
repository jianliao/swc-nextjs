import dynamic from 'next/dynamic';

import { IconTextColor } from '@spectrum-web-components/icons-workflow/src/elements/IconTextColor.js';

export const SpIconTextColor = dynamic<IconTextColor | { slot: string }>(
  () => import('./IconTextColor').then((m) => m.SpIconTextColor as any),
  { ssr: false }
);
