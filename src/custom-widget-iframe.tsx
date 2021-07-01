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

import React, { ReactElement } from "react";
import { BlockAttributes } from "widget-sdk";

// https://www.npmjs.com/package/react-iframe
import Iframe from "react-iframe";

/**
 * React Component
 */
export interface CustomWidgetIframeProps extends BlockAttributes {
  url: string;
  height: string;
  width: string;
  display: string;
  position: string;
  cssid: string;
  cssclass: string;
}

export const CustomWidgetIframe = ({ url, height, width, display, position, cssid, cssclass }: CustomWidgetIframeProps): ReactElement => {
  
  const defaultUrl = "https://www.youtube.com/embed/xDMP3i36naA";
  const defaultDisplay = "block";
  const defaultPosition = "static";
  const defaultHeight = "100%";
  const defaultWidth = "100%";

  return <Iframe url={url ? url : defaultUrl}
    // width={width ? width : defaultWidth}
    // height={height ? height : defaultHeight}
    display={display ? display : defaultDisplay}
    position={position ? position : defaultPosition}
    id={cssid}
    className={cssclass}
  />
};

