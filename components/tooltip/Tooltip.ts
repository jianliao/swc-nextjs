import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { TooltipProxy } from '@spectrum-web-components/tooltip';
import { Tooltip } from '@spectrum-web-components/tooltip';

import '@spectrum-web-components/tooltip/sp-tooltip.js';

export const SpTooltipProxy = createComponent({
  react: React,
  tagName: 'tooltip-proxy',
  elementClass: TooltipProxy,
  events: { disconnected: 'disconnected' },
  displayName: 'SpTooltipProxy',
});
export const SpTooltip = createComponent({
  react: React,
  tagName: 'sp-tooltip',
  elementClass: Tooltip,
  events: {
    onOverlayQuery: 'onOverlayQuery',
    overlayWillOpenCallback: 'overlayWillOpenCallback',
    overlayOpenCancelledCallback: 'overlayOpenCancelledCallback',
    overlayCloseCallback: 'overlayCloseCallback',
  },
  displayName: 'SpTooltip',
});
