import dynamic from 'next/dynamic';

import { IconDesktopAndMobile } from '@spectrum-web-components/icons-workflow/src/elements/IconDesktopAndMobile.js';

export const SpIconDesktopAndMobile = dynamic<IconDesktopAndMobile | { slot: string }>(
  () => import('./IconDesktopAndMobile').then((m) => m.SpIconDesktopAndMobile as any),
  { ssr: false}
);
