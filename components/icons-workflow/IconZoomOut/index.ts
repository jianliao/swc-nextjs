import dynamic from 'next/dynamic';

import { IconZoomOut } from '@spectrum-web-components/icons-workflow/src/elements/IconZoomOut.js';

export const SpIconZoomOut = dynamic<IconZoomOut | { slot: string }>(
  () => import('./IconZoomOut').then((m) => m.SpIconZoomOut as any),
  { ssr: false }
);
