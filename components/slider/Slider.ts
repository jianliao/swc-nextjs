import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Slider } from '@spectrum-web-components/slider';
import { SliderHandle } from '@spectrum-web-components/slider';

import '@spectrum-web-components/slider/sp-slider-handle.js';
import '@spectrum-web-components/slider/sp-slider.js';

export const SpSlider = createComponent(React, 'sp-slider', Slider, { spSliderHandleReady: 'sp-slider-handle-ready', input: 'input', change: 'change', }, 'SpSlider');
export const SpSliderHandle = createComponent(React, 'sp-slider-handle', SliderHandle, { spSliderHandleReady: 'sp-slider-handle-ready', input: 'input', change: 'change', }, 'SpSliderHandle');
