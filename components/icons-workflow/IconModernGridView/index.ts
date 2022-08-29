import dynamic from 'next/dynamic';

import { IconModernGridView } from '@spectrum-web-components/icons-workflow/src/elements/IconModernGridView.js';

export const SpIconModernGridView = dynamic<IconModernGridView | { slot: string }>(
  () => import('./IconModernGridView').then((m) => m.SpIconModernGridView as any),
  { ssr: false }
);
