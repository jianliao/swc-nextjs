import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Switch } from '@spectrum-web-components/switch';

import '@spectrum-web-components/switch/sp-switch.js';

export const SpSwitch = createComponent(React, 'sp-switch', Switch, {}, 'SpSwitch');

