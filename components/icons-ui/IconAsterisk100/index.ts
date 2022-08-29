import dynamic from 'next/dynamic';

import { IconAsterisk100 } from '@spectrum-web-components/icons-ui/src/elements/IconAsterisk100.js';

export const SpIconAsterisk100 = dynamic<IconAsterisk100 | { slot: string }>(
  () => import('./IconAsterisk100').then((m) => m.SpIconAsterisk100 as any),
  { ssr: false}
);
