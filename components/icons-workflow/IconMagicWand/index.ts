import dynamic from 'next/dynamic';

import { IconMagicWand } from '@spectrum-web-components/icons-workflow/src/elements/IconMagicWand.js';

export const SpIconMagicWand = dynamic<IconMagicWand | { slot: string }>(
  () => import('./IconMagicWand').then((m) => m.SpIconMagicWand as any),
  { ssr: false}
);
