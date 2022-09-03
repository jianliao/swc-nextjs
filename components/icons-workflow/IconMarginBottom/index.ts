import dynamic from 'next/dynamic';

import { IconMarginBottom } from '@spectrum-web-components/icons-workflow/src/elements/IconMarginBottom.js';

export const SpIconMarginBottom = dynamic<Partial<IconMarginBottom> | { slot: string }>(
  () => import('./IconMarginBottom').then((m) => m.SpIconMarginBottom as any),
  { ssr: false}
);
