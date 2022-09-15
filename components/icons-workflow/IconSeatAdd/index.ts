import dynamic from 'next/dynamic';

import { IconSeatAdd } from '@spectrum-web-components/icons-workflow/src/elements/IconSeatAdd.js';

export const SpIconSeatAdd = dynamic<Partial<IconSeatAdd> | { slot: string }>(
  () => import('./IconSeatAdd').then((m) => m.SpIconSeatAdd as any),
  { ssr: false }
);
