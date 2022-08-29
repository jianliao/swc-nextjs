import dynamic from 'next/dynamic';

import { IconCCLibrary } from '@spectrum-web-components/icons-workflow/src/elements/IconCCLibrary.js';

export const SpIconCCLibrary = dynamic<IconCCLibrary | { slot: string }>(
  () => import('./IconCCLibrary').then((m) => m.SpIconCCLibrary as any),
  { ssr: false }
);
