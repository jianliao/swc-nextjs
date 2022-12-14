import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Button } from '@spectrum-web-components/button';
import { ClearButton } from '@spectrum-web-components/button';
import { CloseButton } from '@spectrum-web-components/button';

import '@spectrum-web-components/button/sp-button.js';
import '@spectrum-web-components/button/sp-clear-button.js';
import '@spectrum-web-components/button/sp-close-button.js';

export const SpButton = createComponent(
  React,
  'sp-button',
  Button,
  { click: 'click', renderAnchor: 'renderAnchor' },
  'SpButton'
);
export const SpClearButton = createComponent(
  React,
  'sp-clear-button',
  ClearButton,
  { click: 'click', renderAnchor: 'renderAnchor' },
  'SpClearButton'
);
export const SpCloseButton = createComponent(
  React,
  'sp-close-button',
  CloseButton,
  { click: 'click', renderAnchor: 'renderAnchor' },
  'SpCloseButton'
);
