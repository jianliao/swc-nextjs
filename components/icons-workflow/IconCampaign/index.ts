import dynamic from 'next/dynamic';

import { IconCampaign } from '@spectrum-web-components/icons-workflow/src/elements/IconCampaign.js';

export const SpIconCampaign = dynamic<IconCampaign | { slot: string }>(
  () => import('./IconCampaign').then((m) => m.SpIconCampaign as any),
  { ssr: false}
);
