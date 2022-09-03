import dynamic from 'next/dynamic';

import { IconStopCircle } from '@spectrum-web-components/icons-workflow/src/elements/IconStopCircle.js';

export const SpIconStopCircle = dynamic<Partial<IconStopCircle> | { slot: string }>(
  () => import('./IconStopCircle').then((m) => m.SpIconStopCircle as any),
  { ssr: false}
);
