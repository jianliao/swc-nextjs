import dynamic from 'next/dynamic';

import { IconJourney } from '@spectrum-web-components/icons-workflow/src/elements/IconJourney.js';

export const SpIconJourney = dynamic<Partial<IconJourney> | { slot: string }>(
  () => import('./IconJourney').then((m) => m.SpIconJourney as any),
  { ssr: false}
);
