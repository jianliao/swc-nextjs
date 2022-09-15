import dynamic from 'next/dynamic';

import { IconImageMapRectangle } from '@spectrum-web-components/icons-workflow/src/elements/IconImageMapRectangle.js';

export const SpIconImageMapRectangle = dynamic<Partial<IconImageMapRectangle> | { slot: string }>(
  () => import('./IconImageMapRectangle').then((m) => m.SpIconImageMapRectangle as any),
  { ssr: false }
);
