import dynamic from 'next/dynamic';

import { IconJumpToTop } from '@spectrum-web-components/icons-workflow/src/elements/IconJumpToTop.js';

export const SpIconJumpToTop = dynamic<Partial<IconJumpToTop> | { slot: string }>(
  () => import('./IconJumpToTop').then((m) => m.SpIconJumpToTop as any),
  { ssr: false }
);
