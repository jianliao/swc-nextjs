import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { PickerBase } from '@spectrum-web-components/picker';
import { Picker } from '@spectrum-web-components/picker';

const ssr = false;

export const SpPickerBase = dynamic<PickerBase | { children?: ReactNode }>(() => import('./PickerBase').then(m => m.SpPickerBase as any), { ssr });
export const SpPicker = dynamic<Picker | { children?: ReactNode }>(() => import('./PickerBase').then(m => m.SpPicker as any), { ssr });

