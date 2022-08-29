import dynamic from 'next/dynamic';

import { IconSentimentPositive } from '@spectrum-web-components/icons-workflow/src/elements/IconSentimentPositive.js';

export const SpIconSentimentPositive = dynamic<IconSentimentPositive | { slot: string }>(
  () => import('./IconSentimentPositive').then((m) => m.SpIconSentimentPositive as any),
  { ssr: false}
);
