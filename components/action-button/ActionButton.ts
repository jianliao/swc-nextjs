import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { ActionButton } from '@spectrum-web-components/action-button';

import '@spectrum-web-components/action-button/sp-action-button.js';

export const SpActionButton = createComponent({
  react: React,
  tagName: 'sp-action-button',
  elementClass: ActionButton,
  events: {
    longpress: 'longpress',
    change: 'change',
    click: 'click',
    renderAnchor: 'renderAnchor',
  },
  displayName: 'SpActionButton',
});
