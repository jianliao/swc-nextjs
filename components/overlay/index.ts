import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { ActiveOverlay } from '@spectrum-web-components/overlay';
import { OverlayTrigger } from '@spectrum-web-components/overlay';

const ssr = false;

export const SpActiveOverlay = dynamic<
  | Partial<ActiveOverlay>
  | { children?: ReactNode }
  | { focus: Function }
  | { feature: Function }
  | { obscure: Function }
  | { openCallback: Function }
  | { dispose: Function }
  | { hide: Function }
  | { applyContentAnimation: Function }
  | { renderTheme: Function }
  | { create: Function }
>(() => import('./Overlay').then((m) => m.SpActiveOverlay as any), { ssr });
export const SpOverlayTrigger = dynamic<
  | Partial<OverlayTrigger>
  | { children?: ReactNode }
  | { onTriggerClick: Function }
  | { onTriggerMouseEnter: Function }
  | { spOpened: Function }
  | { spClosed: Function }
>(() => import('./Overlay').then((m) => m.SpOverlayTrigger as any), { ssr });
