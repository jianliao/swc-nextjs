import dynamic from 'next/dynamic';

import { IconBidRuleAdd } from '@spectrum-web-components/icons-workflow/src/elements/IconBidRuleAdd.js';

export const SpIconBidRuleAdd = dynamic<IconBidRuleAdd | { slot: string }>(
  () => import('./IconBidRuleAdd').then((m) => m.SpIconBidRuleAdd as any),
  { ssr: false }
);
