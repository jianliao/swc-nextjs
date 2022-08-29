import dynamic from 'next/dynamic';

import { IconQuickSelect } from '@spectrum-web-components/icons-workflow/src/elements/IconQuickSelect.js';

export const SpIconQuickSelect = dynamic<IconQuickSelect | { slot: string }>(
  () => import('./IconQuickSelect').then((m) => m.SpIconQuickSelect as any),
  { ssr: false}
);
