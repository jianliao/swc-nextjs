import dynamic from 'next/dynamic';

import { IconCampaignEdit } from '@spectrum-web-components/icons-workflow/src/elements/IconCampaignEdit.js';

export const SpIconCampaignEdit = dynamic<IconCampaignEdit | { slot: string }>(
  () => import('./IconCampaignEdit').then((m) => m.SpIconCampaignEdit as any),
  { ssr: false}
);
