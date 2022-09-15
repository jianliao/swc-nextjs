import dynamic from 'next/dynamic';

import { IconTransparency } from '@spectrum-web-components/icons-workflow/src/elements/IconTransparency.js';

export const SpIconTransparency = dynamic<Partial<IconTransparency> | { slot: string }>(
  () => import('./IconTransparency').then((m) => m.SpIconTransparency as any),
  { ssr: false }
);
