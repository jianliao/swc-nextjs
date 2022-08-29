import dynamic from 'next/dynamic';

import { IconOpenInLight } from '@spectrum-web-components/icons-workflow/src/elements/IconOpenInLight.js';

export const SpIconOpenInLight = dynamic<IconOpenInLight | { slot: string }>(
  () => import('./IconOpenInLight').then((m) => m.SpIconOpenInLight as any),
  { ssr: false}
);
