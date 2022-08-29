import dynamic from 'next/dynamic';

import { IconActions } from '@spectrum-web-components/icons-workflow/src/elements/IconActions.js';

export const SpIconActions = dynamic<IconActions | { slot: string }>(
  () => import('./IconActions').then((m) => m.SpIconActions as any),
  { ssr: false }
);
