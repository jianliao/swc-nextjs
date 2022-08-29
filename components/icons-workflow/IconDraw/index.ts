import dynamic from 'next/dynamic';

import { IconDraw } from '@spectrum-web-components/icons-workflow/src/elements/IconDraw.js';

export const SpIconDraw = dynamic<IconDraw | { slot: string }>(
  () => import('./IconDraw').then((m) => m.SpIconDraw as any),
  { ssr: false}
);
