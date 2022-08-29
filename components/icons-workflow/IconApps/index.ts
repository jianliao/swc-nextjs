import dynamic from 'next/dynamic';

import { IconApps } from '@spectrum-web-components/icons-workflow/src/elements/IconApps.js';

export const SpIconApps = dynamic<IconApps | { slot: string }>(
  () => import('./IconApps').then((m) => m.SpIconApps as any),
  { ssr: false}
);
