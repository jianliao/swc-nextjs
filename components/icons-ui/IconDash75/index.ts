import dynamic from 'next/dynamic';

import { IconDash75 } from '@spectrum-web-components/icons-ui/src/elements/IconDash75.js';

export const SpIconDash75 = dynamic<IconDash75 | { slot: string }>(
  () => import('./IconDash75').then((m) => m.SpIconDash75 as any),
  { ssr: false }
);
