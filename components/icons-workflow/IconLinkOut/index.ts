import dynamic from 'next/dynamic';

import { IconLinkOut } from '@spectrum-web-components/icons-workflow/src/elements/IconLinkOut.js';

export const SpIconLinkOut = dynamic<Partial<IconLinkOut> | { slot: string }>(
  () => import('./IconLinkOut').then((m) => m.SpIconLinkOut as any),
  { ssr: false}
);
