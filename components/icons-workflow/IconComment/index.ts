import dynamic from 'next/dynamic';

import { IconComment } from '@spectrum-web-components/icons-workflow/src/elements/IconComment.js';

export const SpIconComment = dynamic<Partial<IconComment> | { slot: string }>(
  () => import('./IconComment').then((m) => m.SpIconComment as any),
  { ssr: false}
);
