import dynamic from 'next/dynamic';

import { IconPanel } from '@spectrum-web-components/icons-workflow/src/elements/IconPanel.js';

export const SpIconPanel = dynamic<Partial<IconPanel> | { slot: string }>(
  () => import('./IconPanel').then((m) => m.SpIconPanel as any),
  { ssr: false}
);
