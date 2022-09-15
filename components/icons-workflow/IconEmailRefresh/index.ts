import dynamic from 'next/dynamic';

import { IconEmailRefresh } from '@spectrum-web-components/icons-workflow/src/elements/IconEmailRefresh.js';

export const SpIconEmailRefresh = dynamic<Partial<IconEmailRefresh> | { slot: string }>(
  () => import('./IconEmailRefresh').then((m) => m.SpIconEmailRefresh as any),
  { ssr: false }
);
