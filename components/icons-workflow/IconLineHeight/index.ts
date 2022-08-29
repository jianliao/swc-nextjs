import dynamic from 'next/dynamic';

import { IconLineHeight } from '@spectrum-web-components/icons-workflow/src/elements/IconLineHeight.js';

export const SpIconLineHeight = dynamic<IconLineHeight | { slot: string }>(
  () => import('./IconLineHeight').then((m) => m.SpIconLineHeight as any),
  { ssr: false }
);
