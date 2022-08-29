import dynamic from 'next/dynamic';

import { IconJourneyData } from '@spectrum-web-components/icons-workflow/src/elements/IconJourneyData.js';

export const SpIconJourneyData = dynamic<IconJourneyData | { slot: string }>(
  () => import('./IconJourneyData').then((m) => m.SpIconJourneyData as any),
  { ssr: false }
);
