import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Tag } from '@spectrum-web-components/tags';
import { Tags } from '@spectrum-web-components/tags';

import '@spectrum-web-components/tags/sp-tag.js';
import '@spectrum-web-components/tags/sp-tags.js';

export const SpTag = createComponent({
  react: React,
  tagName: 'sp-tag',
  elementClass: Tag,
  events: { delete: 'delete' },
  displayName: 'SpTag',
});
export const SpTags = createComponent({
  react: React,
  tagName: 'sp-tags',
  elementClass: Tags,
  events: { focus: 'focus' },
  displayName: 'SpTags',
});
