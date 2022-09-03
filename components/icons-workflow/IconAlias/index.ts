import dynamic from 'next/dynamic';

import { IconAlias } from '@spectrum-web-components/icons-workflow/src/elements/IconAlias.js';

export const SpIconAlias = dynamic<Partial<IconAlias> | { slot: string }>(
  () => import('./IconAlias').then((m) => m.SpIconAlias as any),
  { ssr: false}
);
