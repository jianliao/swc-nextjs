import dynamic from 'next/dynamic';

import { IconCampaignAdd } from '@spectrum-web-components/icons-workflow/src/elements/IconCampaignAdd.js';

export const SpIconCampaignAdd = dynamic<IconCampaignAdd | { slot: string }>(
  () => import('./IconCampaignAdd').then((m) => m.SpIconCampaignAdd as any),
  { ssr: false }
);
