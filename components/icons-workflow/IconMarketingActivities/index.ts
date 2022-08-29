import dynamic from 'next/dynamic';

import { IconMarketingActivities } from '@spectrum-web-components/icons-workflow/src/elements/IconMarketingActivities.js';

export const SpIconMarketingActivities = dynamic<IconMarketingActivities | { slot: string }>(
  () => import('./IconMarketingActivities').then((m) => m.SpIconMarketingActivities as any),
  { ssr: false }
);
