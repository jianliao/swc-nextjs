import dynamic from 'next/dynamic';

import { IconVignette } from '@spectrum-web-components/icons-workflow/src/elements/IconVignette.js';

export const SpIconVignette = dynamic<Partial<IconVignette> | { slot: string }>(
  () => import('./IconVignette').then((m) => m.SpIconVignette as any),
  { ssr: false }
);
