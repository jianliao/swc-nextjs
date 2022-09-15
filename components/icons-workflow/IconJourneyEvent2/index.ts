import dynamic from 'next/dynamic';

import { IconJourneyEvent2 } from '@spectrum-web-components/icons-workflow/src/elements/IconJourneyEvent2.js';

export const SpIconJourneyEvent2 = dynamic<Partial<IconJourneyEvent2> | { slot: string }>(
  () => import('./IconJourneyEvent2').then((m) => m.SpIconJourneyEvent2 as any),
  { ssr: false }
);
