import dynamic from 'next/dynamic';

import { IconNewsAdd } from '@spectrum-web-components/icons-workflow/src/elements/IconNewsAdd.js';

export const SpIconNewsAdd = dynamic<IconNewsAdd | { slot: string }>(
  () => import('./IconNewsAdd').then((m) => m.SpIconNewsAdd as any),
  { ssr: false}
);
