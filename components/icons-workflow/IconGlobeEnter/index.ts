import dynamic from 'next/dynamic';

import { IconGlobeEnter } from '@spectrum-web-components/icons-workflow/src/elements/IconGlobeEnter.js';

export const SpIconGlobeEnter = dynamic<Partial<IconGlobeEnter> | { slot: string }>(
  () => import('./IconGlobeEnter').then((m) => m.SpIconGlobeEnter as any),
  { ssr: false}
);
