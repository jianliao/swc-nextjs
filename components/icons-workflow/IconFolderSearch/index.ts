import dynamic from 'next/dynamic';

import { IconFolderSearch } from '@spectrum-web-components/icons-workflow/src/elements/IconFolderSearch.js';

export const SpIconFolderSearch = dynamic<Partial<IconFolderSearch> | { slot: string }>(
  () => import('./IconFolderSearch').then((m) => m.SpIconFolderSearch as any),
  { ssr: false }
);
