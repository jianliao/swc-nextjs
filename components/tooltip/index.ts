import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { TooltipProxy } from '@spectrum-web-components/tooltip';
import { Tooltip } from '@spectrum-web-components/tooltip';

const ssr = false;

export const SpTooltipProxy = dynamic<
  Partial<TooltipProxy> | { children?: ReactNode } | { disconnected: Function }
>(() => import('./Tooltip').then((m) => m.SpTooltipProxy as any), { ssr });
export const SpTooltip = dynamic<
  | Partial<Tooltip>
  | { children?: ReactNode }
  | { onOverlayQuery: Function }
  | { overlayWillOpenCallback: Function }
  | { overlayOpenCancelledCallback: Function }
  | { overlayCloseCallback: Function }
>(() => import('./Tooltip').then((m) => m.SpTooltip as any), { ssr });
