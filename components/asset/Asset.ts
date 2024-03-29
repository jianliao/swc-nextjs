import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Asset } from '@spectrum-web-components/asset';

import '@spectrum-web-components/asset/sp-asset.js';

export const SpAsset = createComponent({
  react: React,
  tagName: 'sp-asset',
  elementClass: Asset,
  events: {},
  displayName: 'SpAsset',
});
