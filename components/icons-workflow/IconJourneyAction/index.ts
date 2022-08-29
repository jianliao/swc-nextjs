import dynamic from 'next/dynamic';

import { IconJourneyAction } from '@spectrum-web-components/icons-workflow/src/elements/IconJourneyAction.js';

export const SpIconJourneyAction = dynamic<IconJourneyAction | { slot: string }>(
  () => import('./IconJourneyAction').then((m) => m.SpIconJourneyAction as any),
  { ssr: false }
);
