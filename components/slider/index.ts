import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { Slider } from '@spectrum-web-components/slider';
import { SliderHandle } from '@spectrum-web-components/slider';

const ssr = false;

export const SpSlider = dynamic<
  | Partial<Slider>
  | { children?: ReactNode }
  | { dispatchInputEvent: Function }
  | { spSliderHandleReady: Function }
  | { input: Function }
  | { change: Function }
>(() => import('./Slider').then((m) => m.SpSlider as any), { ssr });
export const SpSliderHandle = dynamic<
  | Partial<SliderHandle>
  | { children?: ReactNode }
  | { dispatchInputEvent: Function }
  | { spSliderHandleReady: Function }
  | { input: Function }
  | { change: Function }
>(() => import('./Slider').then((m) => m.SpSliderHandle as any), { ssr });
