import dynamic from 'next/dynamic';

import { IconCloneStamp } from '@spectrum-web-components/icons-workflow/src/elements/IconCloneStamp.js';

export const SpIconCloneStamp = dynamic<Partial<IconCloneStamp> | { slot: string }>(
  () => import('./IconCloneStamp').then((m) => m.SpIconCloneStamp as any),
  { ssr: false }
);
