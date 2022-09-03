import dynamic from 'next/dynamic';

import { IconStamp } from '@spectrum-web-components/icons-workflow/src/elements/IconStamp.js';

export const SpIconStamp = dynamic<Partial<IconStamp> | { slot: string }>(
  () => import('./IconStamp').then((m) => m.SpIconStamp as any),
  { ssr: false}
);
