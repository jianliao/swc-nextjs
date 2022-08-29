import dynamic from 'next/dynamic';

import { IconProjectAdd } from '@spectrum-web-components/icons-workflow/src/elements/IconProjectAdd.js';

export const SpIconProjectAdd = dynamic<IconProjectAdd | { slot: string }>(
  () => import('./IconProjectAdd').then((m) => m.SpIconProjectAdd as any),
  { ssr: false}
);
