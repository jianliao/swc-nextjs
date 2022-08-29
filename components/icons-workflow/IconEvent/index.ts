import dynamic from 'next/dynamic';

import { IconEvent } from '@spectrum-web-components/icons-workflow/src/elements/IconEvent.js';

export const SpIconEvent = dynamic<IconEvent | { slot: string }>(
  () => import('./IconEvent').then((m) => m.SpIconEvent as any),
  { ssr: false }
);
