import dynamic from 'next/dynamic';

import { IconLinkOff } from '@spectrum-web-components/icons-workflow/src/elements/IconLinkOff.js';

export const SpIconLinkOff = dynamic<Partial<IconLinkOff> | { slot: string }>(
  () => import('./IconLinkOff').then((m) => m.SpIconLinkOff as any),
  { ssr: false }
);
