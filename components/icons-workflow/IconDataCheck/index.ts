import dynamic from 'next/dynamic';

import { IconDataCheck } from '@spectrum-web-components/icons-workflow/src/elements/IconDataCheck.js';

export const SpIconDataCheck = dynamic<Partial<IconDataCheck> | { slot: string }>(
  () => import('./IconDataCheck').then((m) => m.SpIconDataCheck as any),
  { ssr: false}
);
