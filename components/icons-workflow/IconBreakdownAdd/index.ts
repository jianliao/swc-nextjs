import dynamic from 'next/dynamic';

import { IconBreakdownAdd } from '@spectrum-web-components/icons-workflow/src/elements/IconBreakdownAdd.js';

export const SpIconBreakdownAdd = dynamic<Partial<IconBreakdownAdd> | { slot: string }>(
  () => import('./IconBreakdownAdd').then((m) => m.SpIconBreakdownAdd as any),
  { ssr: false}
);
