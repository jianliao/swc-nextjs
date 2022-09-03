import dynamic from 'next/dynamic';

import { IconBookmark } from '@spectrum-web-components/icons-workflow/src/elements/IconBookmark.js';

export const SpIconBookmark = dynamic<Partial<IconBookmark> | { slot: string }>(
  () => import('./IconBookmark').then((m) => m.SpIconBookmark as any),
  { ssr: false}
);
