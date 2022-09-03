import dynamic from 'next/dynamic';

import { IconGraphBarVertical } from '@spectrum-web-components/icons-workflow/src/elements/IconGraphBarVertical.js';

export const SpIconGraphBarVertical = dynamic<Partial<IconGraphBarVertical> | { slot: string }>(
  () => import('./IconGraphBarVertical').then((m) => m.SpIconGraphBarVertical as any),
  { ssr: false}
);
