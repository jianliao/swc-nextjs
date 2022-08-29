import dynamic from 'next/dynamic';

import { IconBidRule } from '@spectrum-web-components/icons-workflow/src/elements/IconBidRule.js';

export const SpIconBidRule = dynamic<IconBidRule | { slot: string }>(
  () => import('./IconBidRule').then((m) => m.SpIconBidRule as any),
  { ssr: false }
);
