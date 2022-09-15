import dynamic from 'next/dynamic';

import { IconArticle } from '@spectrum-web-components/icons-workflow/src/elements/IconArticle.js';

export const SpIconArticle = dynamic<Partial<IconArticle> | { slot: string }>(
  () => import('./IconArticle').then((m) => m.SpIconArticle as any),
  { ssr: false }
);
