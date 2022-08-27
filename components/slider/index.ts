import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { Slider } from '@spectrum-web-components/slider';
import { SliderHandle } from '@spectrum-web-components/slider';

const ssr = false;

export const SpSlider = dynamic<Slider | { children?: ReactNode }>(() => import('./Slider').then(m => m.SpSlider as any), { ssr });
export const SpSliderHandle = dynamic<SliderHandle | { children?: ReactNode }>(() => import('./Slider').then(m => m.SpSliderHandle as any), { ssr });
