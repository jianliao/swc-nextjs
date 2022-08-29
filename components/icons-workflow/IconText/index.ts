import dynamic from 'next/dynamic';

import { IconText } from '@spectrum-web-components/icons-workflow/src/elements/IconText.js';

export const SpIconText = dynamic<IconText | { slot: string }>(
  () => import('./IconText').then((m) => m.SpIconText as any),
  { ssr: false }
);
