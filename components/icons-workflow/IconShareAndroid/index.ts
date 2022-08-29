import dynamic from 'next/dynamic';

import { IconShareAndroid } from '@spectrum-web-components/icons-workflow/src/elements/IconShareAndroid.js';

export const SpIconShareAndroid = dynamic<IconShareAndroid | { slot: string }>(
  () => import('./IconShareAndroid').then((m) => m.SpIconShareAndroid as any),
  { ssr: false }
);
