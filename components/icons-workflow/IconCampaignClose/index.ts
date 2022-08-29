import dynamic from 'next/dynamic';

import { IconCampaignClose } from '@spectrum-web-components/icons-workflow/src/elements/IconCampaignClose.js';

export const SpIconCampaignClose = dynamic<IconCampaignClose | { slot: string }>(
  () => import('./IconCampaignClose').then((m) => m.SpIconCampaignClose as any),
  { ssr: false }
);
