import dynamic from 'next/dynamic';

import { IconAlignCenter } from '@spectrum-web-components/icons-workflow/src/elements/IconAlignCenter.js';

export const SpIconAlignCenter = dynamic<IconAlignCenter | { slot: string }>(
  () => import('./IconAlignCenter').then((m) => m.SpIconAlignCenter as any),
  { ssr: false }
);
