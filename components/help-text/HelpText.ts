import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { HelpText } from '@spectrum-web-components/help-text';

import '@spectrum-web-components/help-text/sp-help-text.js';

export const SpHelpText = createComponent({
  react: React,
  tagName: 'sp-help-text',
  elementClass: HelpText,
  events: {},
  displayName: 'SpHelpText',
});
