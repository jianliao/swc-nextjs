import dynamic from 'next/dynamic';

import { IconDataAdd } from '@spectrum-web-components/icons-workflow/src/elements/IconDataAdd.js';

export const SpIconDataAdd = dynamic<IconDataAdd | { slot: string }>(
  () => import('./IconDataAdd').then((m) => m.SpIconDataAdd as any),
  { ssr: false}
);
