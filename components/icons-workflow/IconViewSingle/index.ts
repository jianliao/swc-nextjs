import dynamic from 'next/dynamic';

import { IconViewSingle } from '@spectrum-web-components/icons-workflow/src/elements/IconViewSingle.js';

export const SpIconViewSingle = dynamic<Partial<IconViewSingle> | { slot: string }>(
  () => import('./IconViewSingle').then((m) => m.SpIconViewSingle as any),
  { ssr: false}
);
