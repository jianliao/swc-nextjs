import dynamic from 'next/dynamic';

import { IconBookmarkSmall } from '@spectrum-web-components/icons-workflow/src/elements/IconBookmarkSmall.js';

export const SpIconBookmarkSmall = dynamic<Partial<IconBookmarkSmall> | { slot: string }>(
  () => import('./IconBookmarkSmall').then((m) => m.SpIconBookmarkSmall as any),
  { ssr: false }
);
