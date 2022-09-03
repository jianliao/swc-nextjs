import dynamic from 'next/dynamic';

import { IconText } from '@spectrum-web-components/icons-workflow/src/elements/IconText.js';

export const SpIconText = dynamic<Partial<IconText> | { slot: string }>(
  () => import('./IconText').then((m) => m.SpIconText as any),
  { ssr: false}
);
