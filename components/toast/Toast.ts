import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Toast } from '@spectrum-web-components/toast';

import '@spectrum-web-components/toast/sp-toast.js';

export const SpToast = createComponent({
  react: React,
  tagName: 'sp-toast',
  elementClass: Toast,
  events: { close: 'close' },
  displayName: 'SpToast',
});
