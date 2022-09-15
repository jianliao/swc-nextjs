import dynamic from 'next/dynamic';

import { IconGlobeRemove } from '@spectrum-web-components/icons-workflow/src/elements/IconGlobeRemove.js';

export const SpIconGlobeRemove = dynamic<Partial<IconGlobeRemove> | { slot: string }>(
  () => import('./IconGlobeRemove').then((m) => m.SpIconGlobeRemove as any),
  { ssr: false }
);
