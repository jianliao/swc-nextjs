import dynamic from 'next/dynamic';

import { IconSplitView } from '@spectrum-web-components/icons-workflow/src/elements/IconSplitView.js';

export const SpIconSplitView = dynamic<IconSplitView | { slot: string }>(
  () => import('./IconSplitView').then((m) => m.SpIconSplitView as any),
  { ssr: false}
);
