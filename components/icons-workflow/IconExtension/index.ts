import dynamic from 'next/dynamic';

import { IconExtension } from '@spectrum-web-components/icons-workflow/src/elements/IconExtension.js';

export const SpIconExtension = dynamic<IconExtension | { slot: string }>(
  () => import('./IconExtension').then((m) => m.SpIconExtension as any),
  { ssr: false }
);
