import dynamic from 'next/dynamic';

import { IconFileCampaign } from '@spectrum-web-components/icons-workflow/src/elements/IconFileCampaign.js';

export const SpIconFileCampaign = dynamic<Partial<IconFileCampaign> | { slot: string }>(
  () => import('./IconFileCampaign').then((m) => m.SpIconFileCampaign as any),
  { ssr: false}
);
