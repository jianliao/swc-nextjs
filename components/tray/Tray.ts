import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Tray } from '@spectrum-web-components/tray';

import '@spectrum-web-components/tray/sp-tray.js';

export const SpTray = createComponent(React, 'sp-tray', Tray, {}, 'SpTray');

