import dynamic from 'next/dynamic';

import { IconServers } from '@spectrum-web-components/icons-workflow/src/elements/IconServers.js';

export const SpIconServers = dynamic<IconServers | { slot: string }>(
  () => import('./IconServers').then((m) => m.SpIconServers as any),
  { ssr: false}
);
