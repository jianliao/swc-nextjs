import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Picker } from '@spectrum-web-components/picker';

import '@spectrum-web-components/picker/sp-picker.js';

export const SpPicker = createComponent({
  react: React,
  tagName: 'sp-picker',
  elementClass: Picker,
  events: {
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
  displayName: 'SpPicker',
});
