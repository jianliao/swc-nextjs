import dynamic from 'next/dynamic';

import { IconDash100 } from '@spectrum-web-components/icons-ui/src/elements/IconDash100.js';

export const SpIconDash100 = dynamic<Partial<IconDash100> | { slot: string }>(
  () => import('./IconDash100').then((m) => m.SpIconDash100 as any),
  { ssr: false }
);
