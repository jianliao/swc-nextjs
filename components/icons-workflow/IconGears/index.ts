import dynamic from 'next/dynamic';

import { IconGears } from '@spectrum-web-components/icons-workflow/src/elements/IconGears.js';

export const SpIconGears = dynamic<Partial<IconGears> | { slot: string }>(
  () => import('./IconGears').then((m) => m.SpIconGears as any),
  { ssr: false }
);
