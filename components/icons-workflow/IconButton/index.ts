import dynamic from 'next/dynamic';

import { IconButton } from '@spectrum-web-components/icons-workflow/src/elements/IconButton.js';

export const SpIconButton = dynamic<Partial<IconButton> | { slot: string }>(
  () => import('./IconButton').then((m) => m.SpIconButton as any),
  { ssr: false }
);
