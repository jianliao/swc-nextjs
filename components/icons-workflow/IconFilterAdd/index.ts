import dynamic from 'next/dynamic';

import { IconFilterAdd } from '@spectrum-web-components/icons-workflow/src/elements/IconFilterAdd.js';

export const SpIconFilterAdd = dynamic<Partial<IconFilterAdd> | { slot: string }>(
  () => import('./IconFilterAdd').then((m) => m.SpIconFilterAdd as any),
  { ssr: false}
);
