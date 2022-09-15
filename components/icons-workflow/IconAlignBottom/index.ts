import dynamic from 'next/dynamic';

import { IconAlignBottom } from '@spectrum-web-components/icons-workflow/src/elements/IconAlignBottom.js';

export const SpIconAlignBottom = dynamic<Partial<IconAlignBottom> | { slot: string }>(
  () => import('./IconAlignBottom').then((m) => m.SpIconAlignBottom as any),
  { ssr: false }
);
