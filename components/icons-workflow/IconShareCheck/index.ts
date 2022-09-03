import dynamic from 'next/dynamic';

import { IconShareCheck } from '@spectrum-web-components/icons-workflow/src/elements/IconShareCheck.js';

export const SpIconShareCheck = dynamic<Partial<IconShareCheck> | { slot: string }>(
  () => import('./IconShareCheck').then((m) => m.SpIconShareCheck as any),
  { ssr: false}
);
