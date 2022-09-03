import dynamic from 'next/dynamic';

import { IconPolygon } from '@spectrum-web-components/icons-workflow/src/elements/IconPolygon.js';

export const SpIconPolygon = dynamic<Partial<IconPolygon> | { slot: string }>(
  () => import('./IconPolygon').then((m) => m.SpIconPolygon as any),
  { ssr: false}
);
