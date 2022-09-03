import dynamic from 'next/dynamic';

import { IconVariable } from '@spectrum-web-components/icons-workflow/src/elements/IconVariable.js';

export const SpIconVariable = dynamic<Partial<IconVariable> | { slot: string }>(
  () => import('./IconVariable').then((m) => m.SpIconVariable as any),
  { ssr: false}
);
