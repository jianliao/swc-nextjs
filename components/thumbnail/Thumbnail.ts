import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Thumbnail } from '@spectrum-web-components/thumbnail';

import '@spectrum-web-components/thumbnail/sp-thumbnail.js';

export const SpThumbnail = createComponent({
  react: React,
  tagName: 'sp-thumbnail',
  elementClass: Thumbnail,
  events: {},
  displayName: 'SpThumbnail',
});
