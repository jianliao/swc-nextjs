import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Tray } from '@spectrum-web-components/tray';

import '@spectrum-web-components/tray/sp-tray.js';

export const SpTray = createComponent({
  react: React,
  tagName: 'sp-tray',
  elementClass: Tray,
  events: { focus: 'focus', overlayWillCloseCallback: 'overlayWillCloseCallback', close: 'close' },
  displayName: 'SpTray',
});
