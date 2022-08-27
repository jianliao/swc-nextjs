import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Toast } from '@spectrum-web-components/toast';

import '@spectrum-web-components/toast/sp-toast.js';

export const SpToast = createComponent(React, 'sp-toast', Toast, { close: 'close', }, 'SpToast');

