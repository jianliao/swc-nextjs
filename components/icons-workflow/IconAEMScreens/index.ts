import dynamic from 'next/dynamic';

import { IconAEMScreens } from '@spectrum-web-components/icons-workflow/src/elements/IconAEMScreens.js';

export const SpIconAEMScreens = dynamic<IconAEMScreens | { slot: string }>(
  () => import('./IconAEMScreens').then((m) => m.SpIconAEMScreens as any),
  { ssr: false }
);
