import dynamic from 'next/dynamic';

import { IconGraphBubble } from '@spectrum-web-components/icons-workflow/src/elements/IconGraphBubble.js';

export const SpIconGraphBubble = dynamic<Partial<IconGraphBubble> | { slot: string }>(
  () => import('./IconGraphBubble').then((m) => m.SpIconGraphBubble as any),
  { ssr: false }
);
