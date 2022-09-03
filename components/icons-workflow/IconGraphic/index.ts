import dynamic from 'next/dynamic';

import { IconGraphic } from '@spectrum-web-components/icons-workflow/src/elements/IconGraphic.js';

export const SpIconGraphic = dynamic<Partial<IconGraphic> | { slot: string }>(
  () => import('./IconGraphic').then((m) => m.SpIconGraphic as any),
  { ssr: false}
);
