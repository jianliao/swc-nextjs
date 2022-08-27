import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Card } from '@spectrum-web-components/card';

import '@spectrum-web-components/card/sp-card.js';

export const SpCard = createComponent(
  React,
  'sp-card',
  Card,
  { click: 'click', change: 'change' },
  'SpCard'
);
