import dynamic from 'next/dynamic';

import { IconClassicGridView } from '@spectrum-web-components/icons-workflow/src/elements/IconClassicGridView.js';

export const SpIconClassicGridView = dynamic<IconClassicGridView | { slot: string }>(
  () => import('./IconClassicGridView').then((m) => m.SpIconClassicGridView as any),
  { ssr: false}
);
