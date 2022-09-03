import dynamic from 'next/dynamic';

import { IconDash500 } from '@spectrum-web-components/icons-ui/src/elements/IconDash500.js';

export const SpIconDash500 = dynamic<Partial<IconDash500> | { slot: string }>(
  () => import('./IconDash500').then((m) => m.SpIconDash500 as any),
  { ssr: false}
);
