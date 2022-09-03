import dynamic from 'next/dynamic';

import { IconAt } from '@spectrum-web-components/icons-workflow/src/elements/IconAt.js';

export const SpIconAt = dynamic<Partial<IconAt> | { slot: string }>(
  () => import('./IconAt').then((m) => m.SpIconAt as any),
  { ssr: false}
);
