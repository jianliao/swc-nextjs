import dynamic from 'next/dynamic';

import { IconTextAlignCenter } from '@spectrum-web-components/icons-workflow/src/elements/IconTextAlignCenter.js';

export const SpIconTextAlignCenter = dynamic<IconTextAlignCenter | { slot: string }>(
  () => import('./IconTextAlignCenter').then((m) => m.SpIconTextAlignCenter as any),
  { ssr: false }
);
