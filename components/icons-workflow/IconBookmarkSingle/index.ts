import dynamic from 'next/dynamic';

import { IconBookmarkSingle } from '@spectrum-web-components/icons-workflow/src/elements/IconBookmarkSingle.js';

export const SpIconBookmarkSingle = dynamic<IconBookmarkSingle | { slot: string }>(
  () => import('./IconBookmarkSingle').then((m) => m.SpIconBookmarkSingle as any),
  { ssr: false }
);
