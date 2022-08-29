import dynamic from 'next/dynamic';

import { IconMarginLeft } from '@spectrum-web-components/icons-workflow/src/elements/IconMarginLeft.js';

export const SpIconMarginLeft = dynamic<IconMarginLeft | { slot: string }>(
  () => import('./IconMarginLeft').then((m) => m.SpIconMarginLeft as any),
  { ssr: false }
);
