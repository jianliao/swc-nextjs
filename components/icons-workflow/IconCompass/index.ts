import dynamic from 'next/dynamic';

import { IconCompass } from '@spectrum-web-components/icons-workflow/src/elements/IconCompass.js';

export const SpIconCompass = dynamic<IconCompass | { slot: string }>(
  () => import('./IconCompass').then((m) => m.SpIconCompass as any),
  { ssr: false}
);
