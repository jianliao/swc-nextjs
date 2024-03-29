import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Popover } from '@spectrum-web-components/popover';

import '@spectrum-web-components/popover/sp-popover.js';

export const SpPopover = createComponent({
  react: React,
  tagName: 'sp-popover',
  elementClass: Popover,
  events: { onOverlayQuery: 'onOverlayQuery' },
  displayName: 'SpPopover',
});
