import dynamic from 'next/dynamic';

import { IconNewItem } from '@spectrum-web-components/icons-workflow/src/elements/IconNewItem.js';

export const SpIconNewItem = dynamic<IconNewItem | { slot: string }>(
  () => import('./IconNewItem').then((m) => m.SpIconNewItem as any),
  { ssr: false}
);
