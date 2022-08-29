import dynamic from 'next/dynamic';

import { IconSentimentNeutral } from '@spectrum-web-components/icons-workflow/src/elements/IconSentimentNeutral.js';

export const SpIconSentimentNeutral = dynamic<IconSentimentNeutral | { slot: string }>(
  () => import('./IconSentimentNeutral').then((m) => m.SpIconSentimentNeutral as any),
  { ssr: false}
);
