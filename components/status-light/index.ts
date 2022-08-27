import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { StatusLight } from '@spectrum-web-components/status-light';

const ssr = false;

export const SpStatusLight = dynamic<StatusLight | { children?: ReactNode }>(() => import('./StatusLight').then(m => m.SpStatusLight as any), { ssr });

