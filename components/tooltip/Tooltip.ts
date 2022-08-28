import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { TooltipProxy } from '@spectrum-web-components/tooltip';
import { Tooltip } from '@spectrum-web-components/tooltip';

import '@spectrum-web-components/tooltip/sp-tooltip.js';

export const SpTooltipProxy = createComponent(
  React,
  'tooltip-proxy',
  TooltipProxy,
  { disconnected: 'disconnected' },
  'SpTooltipProxy'
);
export const SpTooltip = createComponent(
  React,
  'sp-tooltip',
  Tooltip,
  {
    onOverlayQuery: 'onOverlayQuery',
    overlayWillOpenCallback: 'overlayWillOpenCallback',
    overlayOpenCancelledCallback: 'overlayOpenCancelledCallback',
    overlayCloseCallback: 'overlayCloseCallback',
  },
  'SpTooltip'
);
