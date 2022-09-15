import dynamic from 'next/dynamic';

import { IconJourneyVoyager } from '@spectrum-web-components/icons-workflow/src/elements/IconJourneyVoyager.js';

export const SpIconJourneyVoyager = dynamic<Partial<IconJourneyVoyager> | { slot: string }>(
  () => import('./IconJourneyVoyager').then((m) => m.SpIconJourneyVoyager as any),
  { ssr: false }
);
