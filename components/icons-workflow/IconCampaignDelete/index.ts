import dynamic from 'next/dynamic';

import { IconCampaignDelete } from '@spectrum-web-components/icons-workflow/src/elements/IconCampaignDelete.js';

export const SpIconCampaignDelete = dynamic<Partial<IconCampaignDelete> | { slot: string }>(
  () => import('./IconCampaignDelete').then((m) => m.SpIconCampaignDelete as any),
  { ssr: false }
);
