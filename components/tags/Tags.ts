import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Tag } from '@spectrum-web-components/tags';
import { Tags } from '@spectrum-web-components/tags';

import '@spectrum-web-components/tags/sp-tag.js';
import '@spectrum-web-components/tags/sp-tags.js';

export const SpTag = createComponent(React, 'sp-tag', Tag, { delete: 'delete' }, 'SpTag');
export const SpTags = createComponent(React, 'sp-tags', Tags, {}, 'SpTags');
