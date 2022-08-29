import dynamic from 'next/dynamic';

import { IconImageProfile } from '@spectrum-web-components/icons-workflow/src/elements/IconImageProfile.js';

export const SpIconImageProfile = dynamic<IconImageProfile | { slot: string }>(
  () => import('./IconImageProfile').then((m) => m.SpIconImageProfile as any),
  { ssr: false}
);
