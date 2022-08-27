import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { SplitView } from '@spectrum-web-components/split-view';

const ssr = false;

export const SpSplitView = dynamic<SplitView | { children?: ReactNode }>(() => import('./SplitView').then(m => m.SpSplitView as any), { ssr });

