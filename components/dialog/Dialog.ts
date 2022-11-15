import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Dialog } from '@spectrum-web-components/dialog';
import { DialogWrapper } from '@spectrum-web-components/dialog';

import '@spectrum-web-components/dialog/sp-dialog-base.js';
import '@spectrum-web-components/dialog/sp-dialog-wrapper.js';
import '@spectrum-web-components/dialog/sp-dialog.js';

export const SpDialog = createComponent({
  react: React,
  tagName: 'sp-dialog',
  elementClass: Dialog,
  events: { close: 'close' },
  displayName: 'SpDialog',
});
export const SpDialogWrapper = createComponent({
  react: React,
  tagName: 'sp-dialog-wrapper',
  elementClass: DialogWrapper,
  events: {
    focus: 'focus',
    overlayWillCloseCallback: 'overlayWillCloseCallback',
    close: 'close',
    secondary: 'secondary',
    cancel: 'cancel',
    confirm: 'confirm',
  },
  displayName: 'SpDialogWrapper',
});
