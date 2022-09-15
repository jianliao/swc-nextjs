import dynamic from 'next/dynamic';

import { IconSummarize } from '@spectrum-web-components/icons-workflow/src/elements/IconSummarize.js';

export const SpIconSummarize = dynamic<Partial<IconSummarize> | { slot: string }>(
  () => import('./IconSummarize').then((m) => m.SpIconSummarize as any),
  { ssr: false }
);
