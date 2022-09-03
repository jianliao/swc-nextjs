import dynamic from 'next/dynamic';

import { IconImageSearch } from '@spectrum-web-components/icons-workflow/src/elements/IconImageSearch.js';

export const SpIconImageSearch = dynamic<Partial<IconImageSearch> | { slot: string }>(
  () => import('./IconImageSearch').then((m) => m.SpIconImageSearch as any),
  { ssr: false}
);
