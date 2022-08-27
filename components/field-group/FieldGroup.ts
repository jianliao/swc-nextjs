import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { FieldGroup } from '@spectrum-web-components/field-group';

import '@spectrum-web-components/field-group/sp-field-group.js';

export const SpFieldGroup = createComponent(React, 'sp-field-group', FieldGroup, {}, 'SpFieldGroup');

