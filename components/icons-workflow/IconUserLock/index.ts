import dynamic from 'next/dynamic';

import { IconUserLock } from '@spectrum-web-components/icons-workflow/src/elements/IconUserLock.js';

export const SpIconUserLock = dynamic<IconUserLock | { slot: string }>(
  () => import('./IconUserLock').then((m) => m.SpIconUserLock as any),
  { ssr: false }
);
