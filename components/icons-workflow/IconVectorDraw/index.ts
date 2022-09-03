import dynamic from 'next/dynamic';

import { IconVectorDraw } from '@spectrum-web-components/icons-workflow/src/elements/IconVectorDraw.js';

export const SpIconVectorDraw = dynamic<Partial<IconVectorDraw> | { slot: string }>(
  () => import('./IconVectorDraw').then((m) => m.SpIconVectorDraw as any),
  { ssr: false}
);
