import dynamic from 'next/dynamic';

import { IconRetweet } from '@spectrum-web-components/icons-workflow/src/elements/IconRetweet.js';

export const SpIconRetweet = dynamic<Partial<IconRetweet> | { slot: string }>(
  () => import('./IconRetweet').then((m) => m.SpIconRetweet as any),
  { ssr: false}
);
