import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Textfield } from '@spectrum-web-components/textfield';

import '@spectrum-web-components/textfield/sp-textfield.js';

export const SpTextfield = createComponent(React, 'sp-textfield', Textfield, { change: 'change', input: 'input', }, 'SpTextfield');
