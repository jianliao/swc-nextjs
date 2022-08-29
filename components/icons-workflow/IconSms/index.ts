import dynamic from 'next/dynamic';

import { IconSms } from '@spectrum-web-components/icons-workflow/src/elements/IconSms.js';

export const SpIconSms = dynamic<IconSms | { slot: string }>(
  () => import('./IconSms').then((m) => m.SpIconSms as any),
  { ssr: false }
);
