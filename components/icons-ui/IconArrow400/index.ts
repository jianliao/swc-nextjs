import dynamic from 'next/dynamic';

import { IconArrow400 } from '@spectrum-web-components/icons-ui/src/elements/IconArrow400.js';

export const SpIconArrow400 = dynamic<IconArrow400 | { slot: string }>(
  () => import('./IconArrow400').then((m) => m.SpIconArrow400 as any),
  { ssr: false}
);
