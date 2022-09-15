import dynamic from 'next/dynamic';

import { IconShapes } from '@spectrum-web-components/icons-workflow/src/elements/IconShapes.js';

export const SpIconShapes = dynamic<Partial<IconShapes> | { slot: string }>(
  () => import('./IconShapes').then((m) => m.SpIconShapes as any),
  { ssr: false }
);
