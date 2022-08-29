import dynamic from 'next/dynamic';

import { IconOpenRecent } from '@spectrum-web-components/icons-workflow/src/elements/IconOpenRecent.js';

export const SpIconOpenRecent = dynamic<IconOpenRecent | { slot: string }>(
  () => import('./IconOpenRecent').then((m) => m.SpIconOpenRecent as any),
  { ssr: false }
);
