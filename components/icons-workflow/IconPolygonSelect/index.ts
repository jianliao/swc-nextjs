import dynamic from 'next/dynamic';

import { IconPolygonSelect } from '@spectrum-web-components/icons-workflow/src/elements/IconPolygonSelect.js';

export const SpIconPolygonSelect = dynamic<IconPolygonSelect | { slot: string }>(
  () => import('./IconPolygonSelect').then((m) => m.SpIconPolygonSelect as any),
  { ssr: false}
);
