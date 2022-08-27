import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Link } from '@spectrum-web-components/link';

import '@spectrum-web-components/link/sp-link.js';

export const SpLink = createComponent(React, 'sp-link', Link, {}, 'SpLink');
