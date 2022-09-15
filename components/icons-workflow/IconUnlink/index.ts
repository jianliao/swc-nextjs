import dynamic from 'next/dynamic';

import { IconUnlink } from '@spectrum-web-components/icons-workflow/src/elements/IconUnlink.js';

export const SpIconUnlink = dynamic<Partial<IconUnlink> | { slot: string }>(
  () => import('./IconUnlink').then((m) => m.SpIconUnlink as any),
  { ssr: false }
);
