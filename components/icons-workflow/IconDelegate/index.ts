import dynamic from 'next/dynamic';

import { IconDelegate } from '@spectrum-web-components/icons-workflow/src/elements/IconDelegate.js';

export const SpIconDelegate = dynamic<IconDelegate | { slot: string }>(
  () => import('./IconDelegate').then((m) => m.SpIconDelegate as any),
  { ssr: false}
);
