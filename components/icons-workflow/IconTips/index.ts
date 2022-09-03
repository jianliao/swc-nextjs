import dynamic from 'next/dynamic';

import { IconTips } from '@spectrum-web-components/icons-workflow/src/elements/IconTips.js';

export const SpIconTips = dynamic<Partial<IconTips> | { slot: string }>(
  () => import('./IconTips').then((m) => m.SpIconTips as any),
  { ssr: false}
);
