import dynamic from 'next/dynamic';

import { IconFullScreen } from '@spectrum-web-components/icons-workflow/src/elements/IconFullScreen.js';

export const SpIconFullScreen = dynamic<IconFullScreen | { slot: string }>(
  () => import('./IconFullScreen').then((m) => m.SpIconFullScreen as any),
  { ssr: false }
);
