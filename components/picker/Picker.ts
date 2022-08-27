import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Picker } from '@spectrum-web-components/picker';

import '@spectrum-web-components/picker/sp-picker.js';

export const SpPicker = createComponent(React, 'sp-picker', Picker, { change: 'change', spOpened: 'sp-opened', spClosed: 'sp-closed', }, 'SpPicker');

