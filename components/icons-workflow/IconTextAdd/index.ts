import dynamic from 'next/dynamic';

import { IconTextAdd } from '@spectrum-web-components/icons-workflow/src/elements/IconTextAdd.js';

export const SpIconTextAdd = dynamic<IconTextAdd | { slot: string }>(
  () => import('./IconTextAdd').then((m) => m.SpIconTextAdd as any),
  { ssr: false}
);
