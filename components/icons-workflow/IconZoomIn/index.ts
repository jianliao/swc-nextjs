import dynamic from 'next/dynamic';

import { IconZoomIn } from '@spectrum-web-components/icons-workflow/src/elements/IconZoomIn.js';

export const SpIconZoomIn = dynamic<IconZoomIn | { slot: string }>(
  () => import('./IconZoomIn').then((m) => m.SpIconZoomIn as any),
  { ssr: false}
);
