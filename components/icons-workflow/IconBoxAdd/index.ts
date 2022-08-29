import dynamic from 'next/dynamic';

import { IconBoxAdd } from '@spectrum-web-components/icons-workflow/src/elements/IconBoxAdd.js';

export const SpIconBoxAdd = dynamic<IconBoxAdd | { slot: string }>(
  () => import('./IconBoxAdd').then((m) => m.SpIconBoxAdd as any),
  { ssr: false}
);
