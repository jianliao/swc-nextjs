import dynamic from 'next/dynamic';

import { IconAsterisk } from '@spectrum-web-components/icons-workflow/src/elements/IconAsterisk.js';

export const SpIconAsterisk = dynamic<IconAsterisk | { slot: string }>(
  () => import('./IconAsterisk').then((m) => m.SpIconAsterisk as any),
  { ssr: false}
);
