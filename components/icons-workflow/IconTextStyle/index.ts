import dynamic from 'next/dynamic';

import { IconTextStyle } from '@spectrum-web-components/icons-workflow/src/elements/IconTextStyle.js';

export const SpIconTextStyle = dynamic<Partial<IconTextStyle> | { slot: string }>(
  () => import('./IconTextStyle').then((m) => m.SpIconTextStyle as any),
  { ssr: false }
);
