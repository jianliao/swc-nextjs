import dynamic from 'next/dynamic';

import { IconAlignLeft } from '@spectrum-web-components/icons-workflow/src/elements/IconAlignLeft.js';

export const SpIconAlignLeft = dynamic<Partial<IconAlignLeft> | { slot: string }>(
  () => import('./IconAlignLeft').then((m) => m.SpIconAlignLeft as any),
  { ssr: false}
);
