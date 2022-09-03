import dynamic from 'next/dynamic';

import { IconTextBold } from '@spectrum-web-components/icons-workflow/src/elements/IconTextBold.js';

export const SpIconTextBold = dynamic<Partial<IconTextBold> | { slot: string }>(
  () => import('./IconTextBold').then((m) => m.SpIconTextBold as any),
  { ssr: false}
);
