import dynamic from 'next/dynamic';

import { IconAbc } from '@spectrum-web-components/icons-workflow/src/elements/IconAbc.js';

export const SpIconAbc = dynamic<Partial<IconAbc> | { slot: string }>(
  () => import('./IconAbc').then((m) => m.SpIconAbc as any),
  { ssr: false}
);
