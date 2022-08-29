import dynamic from 'next/dynamic';

import { IconScribble } from '@spectrum-web-components/icons-workflow/src/elements/IconScribble.js';

export const SpIconScribble = dynamic<IconScribble | { slot: string }>(
  () => import('./IconScribble').then((m) => m.SpIconScribble as any),
  { ssr: false}
);
