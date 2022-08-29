import dynamic from 'next/dynamic';

import { IconPaddingBottom } from '@spectrum-web-components/icons-workflow/src/elements/IconPaddingBottom.js';

export const SpIconPaddingBottom = dynamic<IconPaddingBottom | { slot: string }>(
  () => import('./IconPaddingBottom').then((m) => m.SpIconPaddingBottom as any),
  { ssr: false}
);
