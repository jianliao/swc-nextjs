import dynamic from 'next/dynamic';

import { IconImageAutoMode } from '@spectrum-web-components/icons-workflow/src/elements/IconImageAutoMode.js';

export const SpIconImageAutoMode = dynamic<IconImageAutoMode | { slot: string }>(
  () => import('./IconImageAutoMode').then((m) => m.SpIconImageAutoMode as any),
  { ssr: false}
);
