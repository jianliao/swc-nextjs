import dynamic from 'next/dynamic';

import { IconShareWindows } from '@spectrum-web-components/icons-workflow/src/elements/IconShareWindows.js';

export const SpIconShareWindows = dynamic<Partial<IconShareWindows> | { slot: string }>(
  () => import('./IconShareWindows').then((m) => m.SpIconShareWindows as any),
  { ssr: false }
);
