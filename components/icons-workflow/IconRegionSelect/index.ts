import dynamic from 'next/dynamic';

import { IconRegionSelect } from '@spectrum-web-components/icons-workflow/src/elements/IconRegionSelect.js';

export const SpIconRegionSelect = dynamic<Partial<IconRegionSelect> | { slot: string }>(
  () => import('./IconRegionSelect').then((m) => m.SpIconRegionSelect as any),
  { ssr: false}
);
