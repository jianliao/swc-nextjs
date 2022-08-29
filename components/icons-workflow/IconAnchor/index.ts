import dynamic from 'next/dynamic';

import { IconAnchor } from '@spectrum-web-components/icons-workflow/src/elements/IconAnchor.js';

export const SpIconAnchor = dynamic<IconAnchor | { slot: string }>(
  () => import('./IconAnchor').then((m) => m.SpIconAnchor as any),
  { ssr: false }
);
