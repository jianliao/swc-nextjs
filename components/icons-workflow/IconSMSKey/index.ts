import dynamic from 'next/dynamic';

import { IconSMSKey } from '@spectrum-web-components/icons-workflow/src/elements/IconSMSKey.js';

export const SpIconSMSKey = dynamic<Partial<IconSMSKey> | { slot: string }>(
  () => import('./IconSMSKey').then((m) => m.SpIconSMSKey as any),
  { ssr: false}
);
