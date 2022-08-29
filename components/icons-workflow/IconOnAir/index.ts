import dynamic from 'next/dynamic';

import { IconOnAir } from '@spectrum-web-components/icons-workflow/src/elements/IconOnAir.js';

export const SpIconOnAir = dynamic<IconOnAir | { slot: string }>(
  () => import('./IconOnAir').then((m) => m.SpIconOnAir as any),
  { ssr: false }
);
