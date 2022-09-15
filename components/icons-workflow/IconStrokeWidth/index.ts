import dynamic from 'next/dynamic';

import { IconStrokeWidth } from '@spectrum-web-components/icons-workflow/src/elements/IconStrokeWidth.js';

export const SpIconStrokeWidth = dynamic<Partial<IconStrokeWidth> | { slot: string }>(
  () => import('./IconStrokeWidth').then((m) => m.SpIconStrokeWidth as any),
  { ssr: false }
);
