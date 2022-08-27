import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Dialog } from '@spectrum-web-components/dialog';
import { DialogWrapper } from '@spectrum-web-components/dialog';

import '@spectrum-web-components/dialog/sp-dialog-wrapper.js';
import '@spectrum-web-components/dialog/sp-dialog.js';

export const SpDialog = createComponent(React, 'sp-dialog', Dialog, {}, 'SpDialog');
export const SpDialogWrapper = createComponent(React, 'sp-dialog-wrapper', DialogWrapper, {}, 'SpDialogWrapper');

