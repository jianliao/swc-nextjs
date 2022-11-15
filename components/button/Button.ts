import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Button } from '@spectrum-web-components/button';
import { ClearButton } from '@spectrum-web-components/button';
import { CloseButton } from '@spectrum-web-components/button';

import '@spectrum-web-components/button/sp-button.js';
import '@spectrum-web-components/button/sp-clear-button.js';
import '@spectrum-web-components/button/sp-close-button.js';

export const SpButton = createComponent({
  react: React,
  tagName: 'sp-button',
  elementClass: Button,
  events: { click: 'click', renderAnchor: 'renderAnchor' },
  displayName: 'SpButton',
});
export const SpClearButton = createComponent({
  react: React,
  tagName: 'sp-clear-button',
  elementClass: ClearButton,
  events: { click: 'click', renderAnchor: 'renderAnchor' },
  displayName: 'SpClearButton',
});
export const SpCloseButton = createComponent({
  react: React,
  tagName: 'sp-close-button',
  elementClass: CloseButton,
  events: { click: 'click', renderAnchor: 'renderAnchor' },
  displayName: 'SpCloseButton',
});
