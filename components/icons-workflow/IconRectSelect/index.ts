import dynamic from 'next/dynamic';

import { IconRectSelect } from '@spectrum-web-components/icons-workflow/src/elements/IconRectSelect.js';

export const SpIconRectSelect = dynamic<IconRectSelect | { slot: string }>(
  () => import('./IconRectSelect').then((m) => m.SpIconRectSelect as any),
  { ssr: false }
);
