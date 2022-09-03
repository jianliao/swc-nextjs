import dynamic from 'next/dynamic';

import { IconPromote } from '@spectrum-web-components/icons-workflow/src/elements/IconPromote.js';

export const SpIconPromote = dynamic<Partial<IconPromote> | { slot: string }>(
  () => import('./IconPromote').then((m) => m.SpIconPromote as any),
  { ssr: false}
);
