import dynamic from 'next/dynamic';

import { IconLogin } from '@spectrum-web-components/icons-workflow/src/elements/IconLogin.js';

export const SpIconLogin = dynamic<Partial<IconLogin> | { slot: string }>(
  () => import('./IconLogin').then((m) => m.SpIconLogin as any),
  { ssr: false }
);
