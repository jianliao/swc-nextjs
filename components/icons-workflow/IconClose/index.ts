import dynamic from 'next/dynamic';

import { IconClose } from '@spectrum-web-components/icons-workflow/src/elements/IconClose.js';

export const SpIconClose = dynamic<Partial<IconClose> | { slot: string }>(
  () => import('./IconClose').then((m) => m.SpIconClose as any),
  { ssr: false }
);
