import dynamic from 'next/dynamic';

import { IconMultipleAdd } from '@spectrum-web-components/icons-workflow/src/elements/IconMultipleAdd.js';

export const SpIconMultipleAdd = dynamic<Partial<IconMultipleAdd> | { slot: string }>(
  () => import('./IconMultipleAdd').then((m) => m.SpIconMultipleAdd as any),
  { ssr: false }
);
