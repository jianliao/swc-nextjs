import dynamic from 'next/dynamic';

import { IconMultipleCheck } from '@spectrum-web-components/icons-workflow/src/elements/IconMultipleCheck.js';

export const SpIconMultipleCheck = dynamic<Partial<IconMultipleCheck> | { slot: string }>(
  () => import('./IconMultipleCheck').then((m) => m.SpIconMultipleCheck as any),
  { ssr: false}
);
