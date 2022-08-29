import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Icon } from '@spectrum-web-components/icon';

import '@spectrum-web-components/icon/sp-icon.js';

export const SpIcon = createComponent(React, 'sp-icon', Icon, {}, 'SpIcon');
