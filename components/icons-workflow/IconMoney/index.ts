import dynamic from 'next/dynamic';

import { IconMoney } from '@spectrum-web-components/icons-workflow/src/elements/IconMoney.js';

export const SpIconMoney = dynamic<Partial<IconMoney> | { slot: string }>(
  () => import('./IconMoney').then((m) => m.SpIconMoney as any),
  { ssr: false }
);
