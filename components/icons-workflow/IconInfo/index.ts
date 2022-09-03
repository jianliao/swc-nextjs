import dynamic from 'next/dynamic';

import { IconInfo } from '@spectrum-web-components/icons-workflow/src/elements/IconInfo.js';

export const SpIconInfo = dynamic<Partial<IconInfo> | { slot: string }>(
  () => import('./IconInfo').then((m) => m.SpIconInfo as any),
  { ssr: false}
);
