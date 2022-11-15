import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { ButtonGroup } from '@spectrum-web-components/button-group';

import '@spectrum-web-components/button-group/sp-button-group.js';

export const SpButtonGroup = createComponent({
  react: React,
  tagName: 'sp-button-group',
  elementClass: ButtonGroup,
  events: {},
  displayName: 'SpButtonGroup',
});
