import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { ActiveOverlay } from '@spectrum-web-components/overlay';
import { OverlayTrigger } from '@spectrum-web-components/overlay';

const ssr = false;

export const SpActiveOverlay = dynamic<ActiveOverlay | { children?: ReactNode }>(
  () => import('./Overlay').then((m) => m.SpActiveOverlay as any),
  { ssr }
);
export const SpOverlayTrigger = dynamic<
  OverlayTrigger | { children?: ReactNode } | { spOpened: Function } | { spClosed: Function }
>(() => import('./Overlay').then((m) => m.SpOverlayTrigger as any), { ssr });
