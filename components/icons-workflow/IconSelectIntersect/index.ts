import dynamic from 'next/dynamic';

import { IconSelectIntersect } from '@spectrum-web-components/icons-workflow/src/elements/IconSelectIntersect.js';

export const SpIconSelectIntersect = dynamic<Partial<IconSelectIntersect> | { slot: string }>(
  () => import('./IconSelectIntersect').then((m) => m.SpIconSelectIntersect as any),
  { ssr: false }
);
