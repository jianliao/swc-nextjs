import dynamic from 'next/dynamic';

import { IconMultipleExclude } from '@spectrum-web-components/icons-workflow/src/elements/IconMultipleExclude.js';

export const SpIconMultipleExclude = dynamic<IconMultipleExclude | { slot: string }>(
  () => import('./IconMultipleExclude').then((m) => m.SpIconMultipleExclude as any),
  { ssr: false}
);
