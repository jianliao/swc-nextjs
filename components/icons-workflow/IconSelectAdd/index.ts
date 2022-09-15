import dynamic from 'next/dynamic';

import { IconSelectAdd } from '@spectrum-web-components/icons-workflow/src/elements/IconSelectAdd.js';

export const SpIconSelectAdd = dynamic<Partial<IconSelectAdd> | { slot: string }>(
  () => import('./IconSelectAdd').then((m) => m.SpIconSelectAdd as any),
  { ssr: false }
);
