import dynamic from 'next/dynamic';

import { IconArrow500 } from '@spectrum-web-components/icons-ui/src/elements/IconArrow500.js';

export const SpIconArrow500 = dynamic<IconArrow500 | { slot: string }>(
  () => import('./IconArrow500').then((m) => m.SpIconArrow500 as any),
  { ssr: false }
);
