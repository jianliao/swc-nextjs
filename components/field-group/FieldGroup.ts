import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { FieldGroup } from '@spectrum-web-components/field-group';

import '@spectrum-web-components/field-group/sp-field-group.js';

export const SpFieldGroup = createComponent({
  react: React,
  tagName: 'sp-field-group',
  elementClass: FieldGroup,
  events: {},
  displayName: 'SpFieldGroup',
});
