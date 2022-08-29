import dynamic from 'next/dynamic';

import { IconTransparency } from '@spectrum-web-components/icons-workflow/src/elements/IconTransparency.js';

export const SpIconTransparency = dynamic<IconTransparency | { slot: string }>(
  () => import('./IconTransparency').then((m) => m.SpIconTransparency as any),
  { ssr: false}
);
