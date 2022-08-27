import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { TooltipProxy } from '@spectrum-web-components/tooltip';
import { Tooltip } from '@spectrum-web-components/tooltip';

const ssr = false;

export const SpTooltipProxy = dynamic<TooltipProxy | { children?: ReactNode }>(() => import('./Tooltip').then(m => m.SpTooltipProxy as any), { ssr });
export const SpTooltip = dynamic<Tooltip | { children?: ReactNode }>(() => import('./Tooltip').then(m => m.SpTooltip as any), { ssr });
