import dynamic from 'next/dynamic';

import { IconGraphBarHorizontalAdd } from '@spectrum-web-components/icons-workflow/src/elements/IconGraphBarHorizontalAdd.js';

export const SpIconGraphBarHorizontalAdd = dynamic<IconGraphBarHorizontalAdd | { slot: string }>(
  () => import('./IconGraphBarHorizontalAdd').then((m) => m.SpIconGraphBarHorizontalAdd as any),
  { ssr: false }
);
