/*!
 * Copyright 2020, Staffbase GmbH and contributors.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { UiSchema } from "@rjsf/core";
import { JSONSchema7 } from "json-schema";

/**
 * schema used for generation of the configuration dialog
 * see https://react-jsonschema-form.readthedocs.io/en/latest/ for documentation
 */
export const configurationSchema: JSONSchema7 = {
  required: [
    "url"
  ],
  properties: {
    url: {
      type: "string",
      format: "uri",
      title: "iFrame URL",
      default: "https://www.youtube.com/embed/xDMP3i36naA",
    },
    height: {
      type: "string",
      title: "Height (%)",
      default: "100%",
    },
    width: {
      type: "string",
      title: "Width (%)",
      default: "100%",
    },
    display: {
      type: "string",
      title: "Display (default: block)",
      default: "block",
    },
    position: {
      type: "string",
      title: "Position (default: static)",
      default: "static",
    },
    cssid: {
      type: "string",
      title: "CSS ID",
    },
    cssclass: {
      type: "string",
      title: "CSS Class",
    },
  },
};

/**
 * schema to add more customization to the form's look and feel
 * @see https://react-jsonschema-form.readthedocs.io/en/latest/api-reference/uiSchema/
 */
export const uiSchema: UiSchema = {
  url: {
    "ui:help": "Please enter the iframe URL.",
  },
  height: {
    "ui:help": "Please enter a height for the iFrame. 1px > any number above 0, or 1% to 100%. Default: 100%. Note: may collide with pre-defined iframe CSS by SB app.css.",
    // "ui:disabled": true,
  },
  width: {
    "ui:help": "Please enter a width for the iFrame. 1px > any number above 0, or 1% to 100%. Default: 100%. Note: may collide with pre-defined iframe CSS by SB app.css.",
    // "ui:disabled": true,
  },
  display: {
    "ui:help": "Choose a display option, e.g. inline, none, block. Default: block",
  },
  position: {
    "ui:help": "Choose a position option: relative, absolute, fixed, sticky, static, inherit, initial, unset. Default: static",
  },
  cssoid: {
    "ui:help": "Add a CSS ID to the iFrame container.",
  },
  cssclass: {
    "ui:help": "Add a CSS class to the iFrame container.",
  },
};
