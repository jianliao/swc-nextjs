import dynamic from 'next/dynamic';

import { IconSelectContainer } from '@spectrum-web-components/icons-workflow/src/elements/IconSelectContainer.js';

export const SpIconSelectContainer = dynamic<IconSelectContainer | { slot: string }>(
  () => import('./IconSelectContainer').then((m) => m.SpIconSelectContainer as any),
  { ssr: false}
);
