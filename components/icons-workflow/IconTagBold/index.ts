import dynamic from 'next/dynamic';

import { IconTagBold } from '@spectrum-web-components/icons-workflow/src/elements/IconTagBold.js';

export const SpIconTagBold = dynamic<Partial<IconTagBold> | { slot: string }>(
  () => import('./IconTagBold').then((m) => m.SpIconTagBold as any),
  { ssr: false}
);
