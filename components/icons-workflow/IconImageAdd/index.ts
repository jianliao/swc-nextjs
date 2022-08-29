import dynamic from 'next/dynamic';

import { IconImageAdd } from '@spectrum-web-components/icons-workflow/src/elements/IconImageAdd.js';

export const SpIconImageAdd = dynamic<IconImageAdd | { slot: string }>(
  () => import('./IconImageAdd').then((m) => m.SpIconImageAdd as any),
  { ssr: false}
);
