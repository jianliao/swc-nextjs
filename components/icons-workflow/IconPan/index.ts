import dynamic from 'next/dynamic';

import { IconPan } from '@spectrum-web-components/icons-workflow/src/elements/IconPan.js';

export const SpIconPan = dynamic<Partial<IconPan> | { slot: string }>(
  () => import('./IconPan').then((m) => m.SpIconPan as any),
  { ssr: false }
);
