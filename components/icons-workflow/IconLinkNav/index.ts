import dynamic from 'next/dynamic';

import { IconLinkNav } from '@spectrum-web-components/icons-workflow/src/elements/IconLinkNav.js';

export const SpIconLinkNav = dynamic<IconLinkNav | { slot: string }>(
  () => import('./IconLinkNav').then((m) => m.SpIconLinkNav as any),
  { ssr: false}
);
