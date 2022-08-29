import dynamic from 'next/dynamic';

import { IconImageText } from '@spectrum-web-components/icons-workflow/src/elements/IconImageText.js';

export const SpIconImageText = dynamic<IconImageText | { slot: string }>(
  () => import('./IconImageText').then((m) => m.SpIconImageText as any),
  { ssr: false}
);
