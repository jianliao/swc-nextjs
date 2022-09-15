import dynamic from 'next/dynamic';

import { IconLinkPage } from '@spectrum-web-components/icons-workflow/src/elements/IconLinkPage.js';

export const SpIconLinkPage = dynamic<Partial<IconLinkPage> | { slot: string }>(
  () => import('./IconLinkPage').then((m) => m.SpIconLinkPage as any),
  { ssr: false }
);
