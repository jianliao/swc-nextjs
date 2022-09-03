import dynamic from 'next/dynamic';

import { IconImageMapPolygon } from '@spectrum-web-components/icons-workflow/src/elements/IconImageMapPolygon.js';

export const SpIconImageMapPolygon = dynamic<Partial<IconImageMapPolygon> | { slot: string }>(
  () => import('./IconImageMapPolygon').then((m) => m.SpIconImageMapPolygon as any),
  { ssr: false}
);
