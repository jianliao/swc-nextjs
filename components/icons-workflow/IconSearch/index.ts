import dynamic from 'next/dynamic';

import { IconSearch } from '@spectrum-web-components/icons-workflow/src/elements/IconSearch.js';

export const SpIconSearch = dynamic<Partial<IconSearch> | { slot: string }>(
  () => import('./IconSearch').then((m) => m.SpIconSearch as any),
  { ssr: false}
);
