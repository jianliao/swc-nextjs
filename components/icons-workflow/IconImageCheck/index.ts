import dynamic from 'next/dynamic';

import { IconImageCheck } from '@spectrum-web-components/icons-workflow/src/elements/IconImageCheck.js';

export const SpIconImageCheck = dynamic<Partial<IconImageCheck> | { slot: string }>(
  () => import('./IconImageCheck').then((m) => m.SpIconImageCheck as any),
  { ssr: false}
);
