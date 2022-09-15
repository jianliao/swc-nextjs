import dynamic from 'next/dynamic';

import { IconColorPalette } from '@spectrum-web-components/icons-workflow/src/elements/IconColorPalette.js';

export const SpIconColorPalette = dynamic<Partial<IconColorPalette> | { slot: string }>(
  () => import('./IconColorPalette').then((m) => m.SpIconColorPalette as any),
  { ssr: false }
);
