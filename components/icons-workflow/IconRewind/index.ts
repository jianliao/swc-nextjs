import dynamic from 'next/dynamic';

import { IconRewind } from '@spectrum-web-components/icons-workflow/src/elements/IconRewind.js';

export const SpIconRewind = dynamic<Partial<IconRewind> | { slot: string }>(
  () => import('./IconRewind').then((m) => m.SpIconRewind as any),
  { ssr: false }
);
