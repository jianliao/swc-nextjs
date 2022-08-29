import dynamic from 'next/dynamic';

import { IconAsterisk200 } from '@spectrum-web-components/icons-ui/src/elements/IconAsterisk200.js';

export const SpIconAsterisk200 = dynamic<IconAsterisk200 | { slot: string }>(
  () => import('./IconAsterisk200').then((m) => m.SpIconAsterisk200 as any),
  { ssr: false}
);
