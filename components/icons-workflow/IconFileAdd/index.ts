import dynamic from 'next/dynamic';

import { IconFileAdd } from '@spectrum-web-components/icons-workflow/src/elements/IconFileAdd.js';

export const SpIconFileAdd = dynamic<IconFileAdd | { slot: string }>(
  () => import('./IconFileAdd').then((m) => m.SpIconFileAdd as any),
  { ssr: false}
);
