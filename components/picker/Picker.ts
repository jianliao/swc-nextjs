import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { PickerBase } from '@spectrum-web-components/picker';
import { Picker } from '@spectrum-web-components/picker';

import '@spectrum-web-components/picker/sp-picker.js';

export const SpPickerBase = createComponent(React, 'sp-picker', PickerBase, {}, 'SpPickerBase');
export const SpPicker = createComponent(React, 'sp-picker', Picker, {}, 'SpPicker');

