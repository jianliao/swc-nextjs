import dynamic from 'next/dynamic';

import { IconBackAndroid } from '@spectrum-web-components/icons-workflow/src/elements/IconBackAndroid.js';

export const SpIconBackAndroid = dynamic<IconBackAndroid | { slot: string }>(
  () => import('./IconBackAndroid').then((m) => m.SpIconBackAndroid as any),
  { ssr: false }
);
