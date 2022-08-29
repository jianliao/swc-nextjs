import dynamic from 'next/dynamic';

import { IconFeed } from '@spectrum-web-components/icons-workflow/src/elements/IconFeed.js';

export const SpIconFeed = dynamic<IconFeed | { slot: string }>(
  () => import('./IconFeed').then((m) => m.SpIconFeed as any),
  { ssr: false }
);
