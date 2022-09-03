import dynamic from 'next/dynamic';

import { IconCross75 } from '@spectrum-web-components/icons-ui/src/elements/IconCross75.js';

export const SpIconCross75 = dynamic<Partial<IconCross75> | { slot: string }>(
  () => import('./IconCross75').then((m) => m.SpIconCross75 as any),
  { ssr: false}
);
