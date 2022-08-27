import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { IconsLarge } from '@spectrum-web-components/icons';
import { IconsMedium } from '@spectrum-web-components/icons';

import '@spectrum-web-components/icons/sp-icons-large.js';
import '@spectrum-web-components/icons/sp-icons-medium.js';

export const SpIconsLarge = createComponent(React, 'sp-icons-large', IconsLarge, { }, 'SpIconsLarge');
export const SpIconsMedium = createComponent(React, 'sp-icons-medium', IconsMedium, { }, 'SpIconsMedium');
