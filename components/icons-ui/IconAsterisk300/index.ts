import dynamic from 'next/dynamic';

import { IconAsterisk300 } from '@spectrum-web-components/icons-ui/src/elements/IconAsterisk300.js';

export const SpIconAsterisk300 = dynamic<Partial<IconAsterisk300> | { slot: string }>(
  () => import('./IconAsterisk300').then((m) => m.SpIconAsterisk300 as any),
  { ssr: false }
);
