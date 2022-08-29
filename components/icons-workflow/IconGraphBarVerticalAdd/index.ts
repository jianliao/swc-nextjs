import dynamic from 'next/dynamic';

import { IconGraphBarVerticalAdd } from '@spectrum-web-components/icons-workflow/src/elements/IconGraphBarVerticalAdd.js';

export const SpIconGraphBarVerticalAdd = dynamic<IconGraphBarVerticalAdd | { slot: string }>(
  () => import('./IconGraphBarVerticalAdd').then((m) => m.SpIconGraphBarVerticalAdd as any),
  { ssr: false }
);
