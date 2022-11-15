import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { ActiveOverlay } from '@spectrum-web-components/overlay';
import { OverlayTrigger } from '@spectrum-web-components/overlay';

export const SpActiveOverlay = createComponent({
  react: React,
  tagName: 'active-overlay',
  elementClass: ActiveOverlay,
  events: {
    focus: 'focus',
    feature: 'feature',
    obscure: 'obscure',
    openCallback: 'openCallback',
    dispose: 'dispose',
    placeOverlay: 'placeOverlay',
    hide: 'hide',
    applyContentAnimation: 'applyContentAnimation',
    renderTheme: 'renderTheme',
    create: 'create',
  },
  displayName: 'SpActiveOverlay',
});
export const SpOverlayTrigger = createComponent({
  react: React,
  tagName: 'overlay-trigger',
  elementClass: OverlayTrigger,
  events: {
    onTriggerClick: 'onTriggerClick',
    onTriggerMouseEnter: 'onTriggerMouseEnter',
    spOpened: 'sp-opened',
    spClosed: 'sp-closed',
  },
  displayName: 'SpOverlayTrigger',
});
