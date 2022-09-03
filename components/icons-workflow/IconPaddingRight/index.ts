import dynamic from 'next/dynamic';

import { IconPaddingRight } from '@spectrum-web-components/icons-workflow/src/elements/IconPaddingRight.js';

export const SpIconPaddingRight = dynamic<Partial<IconPaddingRight> | { slot: string }>(
  () => import('./IconPaddingRight').then((m) => m.SpIconPaddingRight as any),
  { ssr: false}
);
