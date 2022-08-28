import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { Tray } from '@spectrum-web-components/tray';

const ssr = false;

export const SpTray = dynamic<
  | Tray
  | { children?: ReactNode }
  | { focus: Function }
  | { overlayWillCloseCallback: Function }
  | { close: Function }
>(() => import('./Tray').then((m) => m.SpTray as any), { ssr });
