import dynamic from 'next/dynamic';

import { IconGlobeSearch } from '@spectrum-web-components/icons-workflow/src/elements/IconGlobeSearch.js';

export const SpIconGlobeSearch = dynamic<Partial<IconGlobeSearch> | { slot: string }>(
  () => import('./IconGlobeSearch').then((m) => m.SpIconGlobeSearch as any),
  { ssr: false}
);
