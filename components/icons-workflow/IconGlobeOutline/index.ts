import dynamic from 'next/dynamic';

import { IconGlobeOutline } from '@spectrum-web-components/icons-workflow/src/elements/IconGlobeOutline.js';

export const SpIconGlobeOutline = dynamic<IconGlobeOutline | { slot: string }>(
  () => import('./IconGlobeOutline').then((m) => m.SpIconGlobeOutline as any),
  { ssr: false }
);
