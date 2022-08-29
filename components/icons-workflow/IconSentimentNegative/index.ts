import dynamic from 'next/dynamic';

import { IconSentimentNegative } from '@spectrum-web-components/icons-workflow/src/elements/IconSentimentNegative.js';

export const SpIconSentimentNegative = dynamic<IconSentimentNegative | { slot: string }>(
  () => import('./IconSentimentNegative').then((m) => m.SpIconSentimentNegative as any),
  { ssr: false }
);
