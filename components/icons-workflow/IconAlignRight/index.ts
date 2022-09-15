import dynamic from 'next/dynamic';

import { IconAlignRight } from '@spectrum-web-components/icons-workflow/src/elements/IconAlignRight.js';

export const SpIconAlignRight = dynamic<Partial<IconAlignRight> | { slot: string }>(
  () => import('./IconAlignRight').then((m) => m.SpIconAlignRight as any),
  { ssr: false }
);
