import dynamic from 'next/dynamic';

import { IconAdd } from '@spectrum-web-components/icons-workflow/src/elements/IconAdd.js';

export const SpIconAdd = dynamic<Partial<IconAdd> | { slot: string }>(
  () => import('./IconAdd').then((m) => m.SpIconAdd as any),
  { ssr: false }
);
