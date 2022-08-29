import dynamic from 'next/dynamic';

import { IconSelect } from '@spectrum-web-components/icons-workflow/src/elements/IconSelect.js';

export const SpIconSelect = dynamic<IconSelect | { slot: string }>(
  () => import('./IconSelect').then((m) => m.SpIconSelect as any),
  { ssr: false }
);
