import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { Asset } from '@spectrum-web-components/asset';

const ssr = false;

export const SpAsset = dynamic<Asset | { children?: ReactNode }>(
  () => import('./Asset').then((m) => m.SpAsset as any),
  { ssr }
);
