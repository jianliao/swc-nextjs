import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Banner } from '@spectrum-web-components/banner';

import '@spectrum-web-components/banner/sp-banner.js';

export const SpBanner = createComponent({
  react: React,
  tagName: 'sp-banner',
  elementClass: Banner,
  events: {},
  displayName: 'SpBanner',
});
