import dynamic from 'next/dynamic';

import { IconImageAlbum } from '@spectrum-web-components/icons-workflow/src/elements/IconImageAlbum.js';

export const SpIconImageAlbum = dynamic<Partial<IconImageAlbum> | { slot: string }>(
  () => import('./IconImageAlbum').then((m) => m.SpIconImageAlbum as any),
  { ssr: false }
);
