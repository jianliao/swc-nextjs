import dynamic from 'next/dynamic';

import { IconJourneyReports } from '@spectrum-web-components/icons-workflow/src/elements/IconJourneyReports.js';

export const SpIconJourneyReports = dynamic<Partial<IconJourneyReports> | { slot: string }>(
  () => import('./IconJourneyReports').then((m) => m.SpIconJourneyReports as any),
  { ssr: false}
);
