import dynamic from 'next/dynamic';

import { IconPreset } from '@spectrum-web-components/icons-workflow/src/elements/IconPreset.js';

export const SpIconPreset = dynamic<IconPreset | { slot: string }>(
  () => import('./IconPreset').then((m) => m.SpIconPreset as any),
  { ssr: false }
);
