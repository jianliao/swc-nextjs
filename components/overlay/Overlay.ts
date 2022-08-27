import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { ActiveOverlay } from '@spectrum-web-components/overlay';
import { OverlayTrigger } from '@spectrum-web-components/overlay';


export const SpActiveOverlay = createComponent(React, 'active-overlay', ActiveOverlay, { }, 'SpActiveOverlay');
export const SpOverlayTrigger = createComponent(React, 'overlay-trigger', OverlayTrigger, { spOpened: 'sp-opened', spClosed: 'sp-closed', }, 'SpOverlayTrigger');
