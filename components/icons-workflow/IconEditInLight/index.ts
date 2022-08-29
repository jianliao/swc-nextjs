import dynamic from 'next/dynamic';

import { IconEditInLight } from '@spectrum-web-components/icons-workflow/src/elements/IconEditInLight.js';

export const SpIconEditInLight = dynamic<IconEditInLight | { slot: string }>(
  () => import('./IconEditInLight').then((m) => m.SpIconEditInLight as any),
  { ssr: false }
);
