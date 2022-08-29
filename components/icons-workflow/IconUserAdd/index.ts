import dynamic from 'next/dynamic';

import { IconUserAdd } from '@spectrum-web-components/icons-workflow/src/elements/IconUserAdd.js';

export const SpIconUserAdd = dynamic<IconUserAdd | { slot: string }>(
  () => import('./IconUserAdd').then((m) => m.SpIconUserAdd as any),
  { ssr: false}
);
