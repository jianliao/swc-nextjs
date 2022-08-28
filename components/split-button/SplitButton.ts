import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { SplitButton } from '@spectrum-web-components/split-button';

import '@spectrum-web-components/split-button/sp-split-button.js';

export const SpSplitButton = createComponent(
  React,
  'sp-split-button',
  SplitButton,
  {
    forceFocusVisible: 'forceFocusVisible',
    onButtonBlur: 'onButtonBlur',
    focus: 'focus',
    onHelperFocus: 'onHelperFocus',
    onButtonFocus: 'onButtonFocus',
    handleChange: 'handleChange',
    setValueFromItem: 'setValueFromItem',
    toggle: 'toggle',
    close: 'close',
    change: 'change',
    spOpened: 'sp-opened',
    spClosed: 'sp-closed',
  },
  'SpSplitButton'
);
