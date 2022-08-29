import dynamic from 'next/dynamic';

import { IconTextSizeAdd } from '@spectrum-web-components/icons-workflow/src/elements/IconTextSizeAdd.js';

export const SpIconTextSizeAdd = dynamic<IconTextSizeAdd | { slot: string }>(
  () => import('./IconTextSizeAdd').then((m) => m.SpIconTextSizeAdd as any),
  { ssr: false}
);
