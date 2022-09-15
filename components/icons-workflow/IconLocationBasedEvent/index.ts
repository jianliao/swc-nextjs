import dynamic from 'next/dynamic';

import { IconLocationBasedEvent } from '@spectrum-web-components/icons-workflow/src/elements/IconLocationBasedEvent.js';

export const SpIconLocationBasedEvent = dynamic<Partial<IconLocationBasedEvent> | { slot: string }>(
  () => import('./IconLocationBasedEvent').then((m) => m.SpIconLocationBasedEvent as any),
  { ssr: false }
);
