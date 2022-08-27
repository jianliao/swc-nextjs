import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { ActionButton } from '@spectrum-web-components/action-button';

import '@spectrum-web-components/action-button/sp-action-button.js';

export const SpActionButton = createComponent(React, 'sp-action-button', ActionButton, { longpress: 'longpress', change: 'change', }, 'SpActionButton');

