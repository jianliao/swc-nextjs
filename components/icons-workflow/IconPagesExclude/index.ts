import dynamic from 'next/dynamic';

import { IconPagesExclude } from '@spectrum-web-components/icons-workflow/src/elements/IconPagesExclude.js';

export const SpIconPagesExclude = dynamic<IconPagesExclude | { slot: string }>(
  () => import('./IconPagesExclude').then((m) => m.SpIconPagesExclude as any),
  { ssr: false}
);
