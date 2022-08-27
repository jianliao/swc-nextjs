import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { Coachmark } from '@spectrum-web-components/coachmark';

const ssr = false;

export const SpCoachmark = dynamic<Coachmark | { children?: ReactNode }>(() => import('./Coachmark').then(m => m.SpCoachmark as any), { ssr });
