import dynamic from 'next/dynamic';

import { IconTextSize } from '@spectrum-web-components/icons-workflow/src/elements/IconTextSize.js';

export const SpIconTextSize = dynamic<IconTextSize | { slot: string }>(
  () => import('./IconTextSize').then((m) => m.SpIconTextSize as any),
  { ssr: false}
);
