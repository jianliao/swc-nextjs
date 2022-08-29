import dynamic from 'next/dynamic';

import { IconLinkOutLight } from '@spectrum-web-components/icons-workflow/src/elements/IconLinkOutLight.js';

export const SpIconLinkOutLight = dynamic<IconLinkOutLight | { slot: string }>(
  () => import('./IconLinkOutLight').then((m) => m.SpIconLinkOutLight as any),
  { ssr: false }
);
