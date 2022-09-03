import dynamic from 'next/dynamic';

import { IconUnmerge } from '@spectrum-web-components/icons-workflow/src/elements/IconUnmerge.js';

export const SpIconUnmerge = dynamic<Partial<IconUnmerge> | { slot: string }>(
  () => import('./IconUnmerge').then((m) => m.SpIconUnmerge as any),
  { ssr: false}
);
