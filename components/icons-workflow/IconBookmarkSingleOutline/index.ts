import dynamic from 'next/dynamic';

import { IconBookmarkSingleOutline } from '@spectrum-web-components/icons-workflow/src/elements/IconBookmarkSingleOutline.js';

export const SpIconBookmarkSingleOutline = dynamic<IconBookmarkSingleOutline | { slot: string }>(
  () => import('./IconBookmarkSingleOutline').then((m) => m.SpIconBookmarkSingleOutline as any),
  { ssr: false}
);
