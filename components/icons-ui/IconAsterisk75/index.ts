import dynamic from 'next/dynamic';

import { IconAsterisk75 } from '@spectrum-web-components/icons-ui/src/elements/IconAsterisk75.js';

export const SpIconAsterisk75 = dynamic<Partial<IconAsterisk75> | { slot: string }>(
  () => import('./IconAsterisk75').then((m) => m.SpIconAsterisk75 as any),
  { ssr: false }
);
