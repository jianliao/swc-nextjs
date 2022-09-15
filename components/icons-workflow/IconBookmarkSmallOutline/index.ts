import dynamic from 'next/dynamic';

import { IconBookmarkSmallOutline } from '@spectrum-web-components/icons-workflow/src/elements/IconBookmarkSmallOutline.js';

export const SpIconBookmarkSmallOutline = dynamic<
  Partial<IconBookmarkSmallOutline> | { slot: string }
>(() => import('./IconBookmarkSmallOutline').then((m) => m.SpIconBookmarkSmallOutline as any), {
  ssr: false,
});
