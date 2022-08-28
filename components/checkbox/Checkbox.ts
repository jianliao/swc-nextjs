import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Checkbox } from '@spectrum-web-components/checkbox';

import '@spectrum-web-components/checkbox/sp-checkbox.js';

export const SpCheckbox = createComponent(React, 'sp-checkbox', Checkbox, {}, 'SpCheckbox');
