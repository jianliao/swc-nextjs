import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { Radio } from '@spectrum-web-components/radio';
import { RadioGroup } from '@spectrum-web-components/radio';

const ssr = false;

export const SpRadio = dynamic<Radio | { children?: ReactNode }>(() => import('./Radio').then(m => m.SpRadio as any), { ssr });
export const SpRadioGroup = dynamic<RadioGroup | { children?: ReactNode }>(() => import('./Radio').then(m => m.SpRadioGroup as any), { ssr });
