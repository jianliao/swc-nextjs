import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Card } from '@spectrum-web-components/card';

import '@spectrum-web-components/card/sp-card.js';

export const SpCard = createComponent({
  react: React,
  tagName: 'sp-card',
  elementClass: Card,
  events: { click: 'click', toggleSelected: 'toggleSelected', change: 'change' },
  displayName: 'SpCard',
});
