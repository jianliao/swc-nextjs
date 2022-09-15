import dynamic from 'next/dynamic';

import { IconPaddingTop } from '@spectrum-web-components/icons-workflow/src/elements/IconPaddingTop.js';

export const SpIconPaddingTop = dynamic<Partial<IconPaddingTop> | { slot: string }>(
  () => import('./IconPaddingTop').then((m) => m.SpIconPaddingTop as any),
  { ssr: false }
);
