import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { ActiveOverlay } from '@spectrum-web-components/overlay';
import { OverlayTrigger } from '@spectrum-web-components/overlay';

export const SpActiveOverlay = createComponent(
  React,
  'active-overlay',
  ActiveOverlay,
  {
    focus: 'focus',
    feature: 'feature',
    obscure: 'obscure',
    openCallback: 'openCallback',
    dispose: 'dispose',
    hide: 'hide',
    applyContentAnimation: 'applyContentAnimation',
    renderTheme: 'renderTheme',
    create: 'create',
  },
  'SpActiveOverlay'
);
export const SpOverlayTrigger = createComponent(
  React,
  'overlay-trigger',
  OverlayTrigger,
  {
    onTriggerClick: 'onTriggerClick',
    onTriggerMouseEnter: 'onTriggerMouseEnter',
    spOpened: 'sp-opened',
    spClosed: 'sp-closed',
  },
  'SpOverlayTrigger'
);
