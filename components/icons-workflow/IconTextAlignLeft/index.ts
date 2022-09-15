import dynamic from 'next/dynamic';

import { IconTextAlignLeft } from '@spectrum-web-components/icons-workflow/src/elements/IconTextAlignLeft.js';

export const SpIconTextAlignLeft = dynamic<Partial<IconTextAlignLeft> | { slot: string }>(
  () => import('./IconTextAlignLeft').then((m) => m.SpIconTextAlignLeft as any),
  { ssr: false }
);
