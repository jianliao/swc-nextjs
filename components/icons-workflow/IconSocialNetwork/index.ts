import dynamic from 'next/dynamic';

import { IconSocialNetwork } from '@spectrum-web-components/icons-workflow/src/elements/IconSocialNetwork.js';

export const SpIconSocialNetwork = dynamic<IconSocialNetwork | { slot: string }>(
  () => import('./IconSocialNetwork').then((m) => m.SpIconSocialNetwork as any),
  { ssr: false }
);
