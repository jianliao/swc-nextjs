import dynamic from 'next/dynamic';

import { IconArchive } from '@spectrum-web-components/icons-workflow/src/elements/IconArchive.js';

export const SpIconArchive = dynamic<IconArchive | { slot: string }>(
  () => import('./IconArchive').then((m) => m.SpIconArchive as any),
  { ssr: false}
);
