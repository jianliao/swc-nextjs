import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Slider } from '@spectrum-web-components/slider';
import { SliderHandle } from '@spectrum-web-components/slider';

import '@spectrum-web-components/slider/sp-slider-handle.js';
import '@spectrum-web-components/slider/sp-slider.js';

export const SpSlider = createComponent({
  react: React,
  tagName: 'sp-slider',
  elementClass: Slider,
  events: {
    dispatchInputEvent: 'dispatchInputEvent',
    spSliderHandleReady: 'sp-slider-handle-ready',
    input: 'input',
    change: 'change',
  },
  displayName: 'SpSlider',
});
export const SpSliderHandle = createComponent({
  react: React,
  tagName: 'sp-slider-handle',
  elementClass: SliderHandle,
  events: {
    dispatchInputEvent: 'dispatchInputEvent',
    spSliderHandleReady: 'sp-slider-handle-ready',
    input: 'input',
    change: 'change',
  },
  displayName: 'SpSliderHandle',
});
