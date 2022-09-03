import dynamic from 'next/dynamic';

import { IconEvents } from '@spectrum-web-components/icons-workflow/src/elements/IconEvents.js';

export const SpIconEvents = dynamic<Partial<IconEvents> | { slot: string }>(
  () => import('./IconEvents').then((m) => m.SpIconEvents as any),
  { ssr: false}
);
