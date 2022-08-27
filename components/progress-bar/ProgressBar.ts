import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { ProgressBar } from '@spectrum-web-components/progress-bar';

import '@spectrum-web-components/progress-bar/sp-progress-bar.js';

export const SpProgressBar = createComponent(React, 'sp-progress-bar', ProgressBar, {}, 'SpProgressBar');

