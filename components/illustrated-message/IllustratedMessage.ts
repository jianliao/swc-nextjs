import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { IllustratedMessage } from '@spectrum-web-components/illustrated-message';

import '@spectrum-web-components/illustrated-message/sp-illustrated-message.js';

export const SpIllustratedMessage = createComponent({
  react: React,
  tagName: 'sp-illustrated-message',
  elementClass: IllustratedMessage,
  events: {},
  displayName: 'SpIllustratedMessage',
});
