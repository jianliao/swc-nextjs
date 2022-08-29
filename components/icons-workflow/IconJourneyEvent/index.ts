import dynamic from 'next/dynamic';

import { IconJourneyEvent } from '@spectrum-web-components/icons-workflow/src/elements/IconJourneyEvent.js';

export const SpIconJourneyEvent = dynamic<IconJourneyEvent | { slot: string }>(
  () => import('./IconJourneyEvent').then((m) => m.SpIconJourneyEvent as any),
  { ssr: false }
);
